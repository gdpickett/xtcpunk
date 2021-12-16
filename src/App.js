import React from 'react';
import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
//import CollectionCard from './components/CollectionCard';
import PunkList from './components/PunkList';
import Main from './components/Main';
import axios from 'axios';

function App() {
  const [ punkListData, setPunkListData ] = useState([]);
  const [ selectedPunk, setSelectedPunk ] =useState([0]);
  useEffect(()=> {
    //uses collection id
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x136402d7f58daa0ac76d4f1ebfca7fc662844135&order_direction=asc')
      console.log(openseaData.data.assets);
      //const openseaData = await fetch('open.php')
      /*const openseaData = await fetch('https://localhost/XTC%20Punks/xtcpunk/public/open.php',
        {
          //'mode': 'cors',
          'referrerPolicy': 'no-referrer-when-downgrade',
          'Access-Control-Allow-Origin': 'localhost'
        }
      )*/
      //.then(response => response.json())
      //.then(json => console.log(json))
      //.catch(err => console.error(err));
      //console.log(openseaData+'---------data');
      //console.log(JSON.stringify(openseaData.data)+'---------json');
      setPunkListData(openseaData.data.assets);

      //function open({assets}){
        //return assets;
      //}
      //setPunkListData(open(openseaData));
      
    }

    return getMyNfts();
  }, [])

  return (
    <div className="App">
      <Header />
      {punkListData.length >0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )}
    </div>
  );
}

export default App;
