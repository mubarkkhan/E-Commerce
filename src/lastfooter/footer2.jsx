import React from "react";
import { AiOutlinePhone } from "react-icons/ai";

function Footersecond(){
    const footerseconddata=[
        {
            icon:<AiOutlinePhone/>,
            calln:"1800-666",
            calld:"working 8:00-22:00"
        },
        {
            icon:<AiOutlinePhone/>,
            calln:"1800-888",
            calld:"Customer support 24/7"
        },
    ]
    return(
        <>
        <div className="footer-second">
            {
                footerseconddata.map((data)=>{
                    return(
                        <>
                            <div className="bx1">
                            <div className="icon">
                            <h2>{data.icon}</h2>
                            </div>
                       <div className="text">
                       <h1>{data.calln}</h1>
                        <p>{data.calld}</p>
                       </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{Footersecond}