import React from "react";
import { Link } from "react-router-dom";
import { sliderdata } from "../data/data";

function Sliderpage(){
    
    return(
        <>
        <div className="slider-content">
            <div className="slider">
                <div className="content">
                    {
                        sliderdata.map((data)=>{
                            return(
                                <>
                                <h1>{data.text}</h1>
                                <p>{data.offer}</p>
                                <span>{data.icon}</span>
                                <input type="email" placeholder={data.input}/>
                                <button><Link>{data.button}</Link></button>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}
export{Sliderpage}