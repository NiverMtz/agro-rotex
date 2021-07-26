import React from 'react'
import '../components/container_card.css'


const ContainerCard = (props) => {
    if(!props.cropData){
        return <div></div>
    }
    return (
        <div className='container-card'>
            <div className="container-card-img">
                <img src="/logo.png" alt="Crop"/>
            </div>
            <div className="container-card-text">
                <div className='container-card__name'>
                    {props.cropData.name}
                </div>
                <div className='container-card__name-science'>
                    {props.cropData.nameScience}
                </div>
            </div>  
        </div>
    )
}

export default ContainerCard
