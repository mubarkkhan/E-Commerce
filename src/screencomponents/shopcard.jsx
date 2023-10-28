import React from "react";
import { adddata } from "../data/data";
import { Link } from "react-router-dom";

function Addcard(){
    
    return(
        <>
        <div className="addcard-container">
            <div className="addcard">
                
                {
                    adddata.map((data)=>{
                        return(
                            <>
                            <div className="acard">
                                <Link to="/home"><div className="position">
                            <h2>{data.name}</h2>
                            <button><Link>{data.button}</Link></button>
                            </div>
                                <img src={data.img} alt="" /> </Link>                                                                                   
                            </div>                           
                            </>
                        )
                    })
                }
            </div>
            </div>       
        </>
    )
}
export{Addcard}