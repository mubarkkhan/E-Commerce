import React, { useState } from "react";
import { buycarddata } from "../data/data";
import { FaDollarSign } from "react-icons/fa6";
import { Star } from "../star rating/star";
import { Price } from "../priceincrease/price";

function Buycard() {
    return (
        <>  
                <div className="buycard"> 
                        {buycarddata
                        .map((data) => {
                            return (
                                <>
                                    <div className="item"><h3>{data.new}</h3>
                                        <img src={data.img} alt="" />
                                        <h5>{data.span}</h5>
                                        <h2>{data.productname}</h2>
                                        <Star/>
                                        <h4>{data.nest}</h4>
                                            <Price/>
                                        <h6><span><FaDollarSign /></span>{data.drupee}</h6>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
        </>
    )
}
export { Buycard }