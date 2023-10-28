import React from "react";
import { Link } from "react-router-dom";
import { footeradata } from "../data/data";

function FooterA(){
    
    return(
        <>
        <div className="footera">
            <div className="content">
                {
                    footeradata.map((data)=>{
                        return(
                            <>
                            <Link to="/home"><img src={data.img} alt="" /></Link>
                            <h3>{data.description}</h3>
                            <Link><h5>{data.addressi}<span>{data.adress}</span></h5></Link>
                            
                            <h6>{data.address}</h6>
                            <Link><h5>{data.calli} <span>{data.call}</span></h5></Link>
                           
                            <h6>{data.calln}</h6>
                            <Link><h5>{data.emaili}<span>{data.email}</span></h5></Link>
                            
                            <h6>{data.emaila}</h6>
                            <Link><h5>{data.houri}<span>{data.hour}</span></h5></Link>
                            
                            <h6>{data.hourt}</h6>
                            </>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export{FooterA}