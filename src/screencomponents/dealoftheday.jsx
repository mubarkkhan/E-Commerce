import React from "react";
import { Star } from "../star rating/star";
import { dealofdata, dealofdata1 } from "../data/data";

function Dealof() {
   
    return (
        <>
            <div className="dealof">
                <div className="heading">
                    {
                        dealofdata.map((data) => {
                            return (
                                <>
                                    <h1>{data.heading}</h1>
                                </>
                            )
                        })
                    }
                </div>
                <div className="img">
                    {
                        dealofdata1.map((data) => {
                            return (
                                <>
                                    <div className="main">
                                    <img src={data.img} alt="" />
                                    <div className="main2">
                                    <div className="li">
                                        <ul>
                                            <li><span>{data.dayn}</span>{data.day}</li>
                                            <li><span>{data.hourn}</span>{data.hour}</li>
                                            <li><span>{data.minn}</span>{data.min}</li>
                                            <li><span>{data.secn}</span>{data.sec}</li>
                                        </ul>
                                    </div>
                                    <div className="text">
                                        <h2>{data.name}</h2>
                                        <Star/>
                                        <h4>{data.nest}</h4>
                                        <div className="rupi">
                                            <h3><span>{data.ripiyai}</span>{data.ripiya1}</h3>
                                            <h4><span>{data.ripiyai}</span>{data.ripiya2}</h4>
                                            <button><span>{data.buttoni}</span>{data.button}</button>
                                        </div>
                                    </div>
                                    </div>
                                </div >
                            </>
                )
                    })
                }
            </div>
        </div >
        </>
    )
}
export { Dealof }