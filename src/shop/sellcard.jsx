import React from "react";
import { Link } from "react-router-dom";
import { cardssdata } from "../data/data";
import { Star } from "../star rating/star";

function SellCard(){
    
    return(
        <>
        <div className="sellcard">
            {
                cardssdata.map((data)=>{
                    return(
                        <>
                                    <div style={{width:"21%",marginTop:"0px"}} className="sell-item">
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
        </>
    )
}
export{SellCard}