import React from "react";
import IMAGES from "../src/Images";
import "./Aside.css";



const Aside=() =>{
    const imageSize ='2px'

    return(
        
        <div className="investor">
        <h1>we are trusted by</h1>
        <div className="investor-container">
        <div className="investor_images">
        <div className="aside-container">
        <img src={IMAGES.pioneer}
         className=""/>
        </div>
        <div className="aside-container">
        <img src={IMAGES.chui}/>
        </div>
        <div className="aside-container">
        <img src={IMAGES.hustle} className="logo"/>
        </div>
        <div className="aside-container">
        <img src={IMAGES.combinator}/>
        </div>
            <div className="aside-container">
        <img src={IMAGES.outbound} className="logo"/>
        </div>
        <div className="aside-container">
        <img src={IMAGES.continent}/>
        </div>
        <div className="aside-container">
        <img src={IMAGES.fintech}/>
         </div>
         <div className="aside-container">
        <img src={IMAGES.fintech}/>
         </div>
         <div className="aside-container">
        <img src={IMAGES.fintech}/>
         </div>


        </div>
        </div>
        
        </div>
    )


}


export default Aside;
