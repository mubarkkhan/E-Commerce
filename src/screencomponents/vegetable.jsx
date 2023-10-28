import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Vegetables(){
    const sliderdata=[
        {
            text:"Stay home & get your daily needs from our shop",
            offer:"Start You'r Daily Shopping with Nest Mart",
            input:"Enter Your Email Address",
            icon:<BsFillSendFill/>,
            button:"Subscribe"
        }
    ]
    return(
        <>
        <div className="vege-content">
            <div className="vege">
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
export{Vegetables}