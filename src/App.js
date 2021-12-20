import "./App.css"
// import CollectionCard from "./components/CollectionCard"
import Header from "./components/Header"
import { useState, useEffect } from "react"
import axios from "axios"
import PunkList from "./components/PunkList"
import Main from "./components/Main"

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xDAd8E51933df1b01bA590D8Cb6fd7BaF3ef32612&order_direction=asc"
      )
      console.log(openSeaData.data.assets)
      setPunkListData(openSeaData.data.assets)
    }

    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  )
}

export default App
