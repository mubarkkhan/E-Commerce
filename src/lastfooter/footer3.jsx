import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footerthird(){
    const footerthirddata=[
        {
            text:"Follow us",
            detail:"Upto 15% discount on your first subscription",
            icon1:<FaFacebook/>,
            icon2:<FaTwitter/>,
            icon3:<FaInstagram/>,
            icon4:<FaYoutube/>
        }
    ]
    return(
        <>
        <div className="footer-third">
            {
                footerthirddata.map((data)=>{
                    return(
                        <>
                        <h2>{data.text}</h2>
                        <div className="icon">
                            <h4>{data.icon1}</h4>
                            <h4>{data.icon2}</h4>
                            <h4>{data.icon3}</h4>
                            <h4>{data.icon4}</h4>
                        </div>
                        <p>{data.detail}</p>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{Footerthird}