import React from "react";
import { Featurdata1, featurdata, featurdata2 } from "../data/data";

function Featured(){
    
    return(
        <>
        <div className="buyheader-content">
            <div className="logo">
            {
                featurdata.map((data)=>{
                    return(
                        <>
                            <h1>{data.logo}</h1>
                        </>
                    )
                })
            }
        </div>
        <div className="li">
            {
              Featurdata1.map((data)=>{
                return(
                    <>
                        <li>{data.name}</li>
                    </>
                )
            })  
            }
        </div>
        </div>
        <div className="feimg">
            {
                featurdata2.map((data)=>{
                    return(
                        <>
                       <div className="img">
                       <img src={data.img} alt="" />
                        <h4>{data.name}</h4>
                       </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{Featured}