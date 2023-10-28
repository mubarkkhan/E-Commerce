import React from "react";
import app1 from "../image/app-store - Copy.ef349165dfaf884573a5.jpg"
import app2 from "../image/google-play - Copy.2a527ac3efc1ecb12a2d.jpg"
import app3 from "../image/payment-method - Copy.47ad3e696f50516da1b3.png"

function FooterF(){
    const footerfdata=[
        {
            text:"Install App",
            description:"From app store $ google Play",
            img1:`${app1}`,
            img2:`${app2}`,
            text1:"Secured payment gateway",
            img3:`${app3}`
        }
    ]
    return(
        <>
        <div className="footerf">
            <div className="content">
                {
                    footerfdata.map((data)=>{
                        return(
                            <>
                            <h3>{data.text}</h3>
                            <p>{data.description}</p>
                            <div className="img">
                                <img src={data.img1} alt="" />
                                <img src={data.img2} alt="" />
                            </div>
                            <h1>{data.text1}</h1>
                            <img src={data.img3} alt="" />
                            </>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export{FooterF}