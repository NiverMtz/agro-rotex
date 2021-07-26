import data from "./data.json";
import Header from "./components/Header";
import Filters from "./components/Filters/Filters.jsx";
import ContainerCard from "./components/ContainerCard";
import Footer from "./components/Footer";
import SuggestionCard from "./components/SuggestionCard";
import GraphsCard from "./components/GraphsCard";
import "./components/globalStyles.css";
import {useState} from "react";

async function getCrop(name){
  const res = await fetch('https://us-south.functions.appdomain.cloud/api/v1/web/luis.lc72353%40gmail.com_dev/agrorotex-api/api?name='+name, {
    method: 'POST',
    body: {}
 });

 console.log(name)
 return res.json();
}

function App() {

  const [data,setData] =  useState("");

  const [crop,setCrop]= useState("");

const showInfo=(crop)=>{
  setData(crop)
}
  

  const fetchData=async (name)=>{
    const crop=await getCrop(name);
    

     setCrop(
      <div onClick={showInfo.bind(this,crop)} className="container fake-gap">
          <ContainerCard cropData={crop}></ContainerCard>
          <br />
          <i className="fa fa-xing" aria-hidden="true"></i>
      </div>
   )

   
  }
  

 

  return (
    <div>
      {/* <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
        integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ"
        crossOrigin="anonymous"
      ></script> */}

      {/* Header */}
      <Header fetchData={fetchData}/>

      {/* Layout */}
      <div className="grid__layout">
        <div className="fake-aside">
          {/* Filters */}
          <div className="container">
            <Filters />
          </div>

          {/* Graphs Card */}
          <GraphsCard titleCard="Rotaciones Comunes" />
        </div>

        {/* Display for Cards */}
        <div className="container__card">
          {crop}
        </div>

        {/* Sugestion Card */}
        <SuggestionCard cropData={data.data} />
      </div>

      {/* Footer */}
      <Footer></Footer>

      {/* Others: Quit */}
     
    </div>
  );
}

export default App;
