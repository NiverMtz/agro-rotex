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


    const seasons =crop.season.map(season=>{
        return (<div className="crop__feature" key={season.from}>
            <img src={wether} className="crop__icon" alt="estacion" /> 
                
            <p>{season.name}: {season.from} - {season.to}</p>
        </div>
        )
    });


    return (
        <div className="container crop">
            <h2>{crop.name.toUpperCase()}</h2>
            <div className="crop__feature">
                <img src={thermo} className="crop__icon" alt="termometro" /> 
                
                <p>min {crop.temperature.min},  max {crop.temperature.max}</p>
            </div>
            {seasons}
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
