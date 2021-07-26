import React from 'react';
import "../components/suggestionCard.css";
import thermo from "../icons/thermometer.svg";
import crops from "../data.json";
import rh from "../icons/rh.svg";
import check from "../icons/check.svg";
import close from "../icons/close.svg";
import wether from "../icons/wether.svg";

function SuggestionCard(props) {
    const crop = props.cropData;
    console.log(crop)

    
    if(!crop){
        return(
            <div >
            </div>
        )
    }


    return (
        <div className="container crop">
            <h2>{crop.name.toUpperCase()}</h2>
            <div className="crop__feature">
                <img src={thermo} className="crop__icon" alt="termometro" /> 
                
                <p>min {crop.temperature.min},  max {crop.temperature.max}</p>
            </div>
            <div className="crop__feature">
                <img src={wether} className="crop__icon" alt="estacion" /> 
                
                <p>{crop.season[0].name}: {crop.season[0].from} - {crop.season[0].to}</p>
            </div>
            
            <div className="crop__feature">
                <img src={wether} className="crop__icon" alt="estacion" /> 
                
                <p>{crop.season[1].name}: {crop.season[1].from} - {crop.season[1].to}</p>
            </div>
            <div className="crop__feature">
                <img className="crop__icon" src={rh} alt="humedad relativa" />
                <p>{crop.RH}</p>
            </div>
            <div className="crop__feature">
                
            <img className="crop__icon" src={close} alt="incompatible" />
                <ul className="crop__incompatible">
                    <CropList crops={crop.incompatibleCrops}/>
                </ul>
            </div>
            <div className="crop__feature">
                
            <img className="crop__icon" src={check} alt="compatible" />
                <ul className="crop__compatible">
                    <CropList crops={crop.compatibleCrops}/>
                </ul>
            </div>
        </div>
    )
}

const CropList=(props)=>{
    const list = props.crops.map(cropName=>{
        return (
            <li key={cropName} >
                {cropName}
            </li>
        )
    });

    return list;
}

export default SuggestionCard
