import React from "react";
import { Link } from "react-router-dom";
import { footerbdata } from "../data/data";

function FooterB(){
    
    return(
        <>
        <div className="footerb">
            <div className="content">
                {
                    footerbdata.map((data)=>{
                        return(
                            <>
                            <h1>{data.text}</h1>
                            <li><Link to={data.path}>{data.name}</Link></li>
                            </>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export{FooterB}