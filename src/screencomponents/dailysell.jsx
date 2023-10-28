import React from "react";
import { Link } from "react-router-dom";
import { Star } from "../star rating/star";
import { bestdealdata, bestdealdata2, cardssdata } from "../data/data";

function Bestdeal(){
    
    return(
        <>
        <div className="bestdeal">
            {
                bestdealdata2.map((data)=>{
                    return(
                        <>
                        <div className="text">
                        <h2>{data.headertext}</h2>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <div className="leaf-flex">
        <div className="leaf">
            {
                bestdealdata.map((data)=>{
                    return(
                        <>
                        <div className="leaf-text">
                        <h1>{data.text}</h1>
                        <button>{data.button}</button>
                        </div>
                        <img src={data.img} alt="" />                      
                        </>
                    )
                })
            }
        </div>
        <div className="cardss">
            {
                cardssdata.map((data)=>{
                    return(
                        <>
                                    <div style={{width:"21%",marginTop:"0px"}} className="item">
                                        <Link><h3>{data.new}</h3>
                                            <img src={data.img} alt="" />
                                            <h5>{data.span}</h5>
                                            <h2>{data.productname}</h2>
                                            <Star/>
                                            <h4>{data.nest}</h4></Link>
                                            <div className="rupiya">
                                                <h1><span style={{color:"#16ee16"}}>{data.rupiyai}</span>{data.ripiya}</h1>
                                                <h6><span>{data.rupiyai}</span>{data.ripiya1}</h6>
                                            </div>
                                            <button>{data.button}</button>
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
export{Bestdeal}