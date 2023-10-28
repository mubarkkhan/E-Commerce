import React from "react";
import { buyheaderdata } from "../data/data";

function Buyheader(){
    
    return(
        <>
        <div className="buyheader-content">
            <div className="logo">
            {
                buyheaderdata.map((data)=>{
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
                buyheaderdata.map((data)=>{
                    return(
                        <>
                            <li>{data.name}</li>
                        </>
                    )
                })
            }
        </div>
        </div>
        </>
    )
}
export{Buyheader}
