import React from "react";
import about2img1 from "../image/performace1.adb2e5f8382f14c855f2 (1).png"
import about2img2 from "../image/performace1.adb2e5f8382f14c855f2.png"

function About2() {
    const aboutdata = [
        {
            img: `${about2img1}`,
            img: `${about2img2}`,
            name: "Our Performance",
            detail: "Your Partner for e-commerce grocery solution",
            lorem: "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
            lorem2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ]
    return (
        <>
        <div className="about2">
            {
                aboutdata.map((data)=>{
                    return(
                        <>
                        <img src={data.img} alt="" />
                        <div className="text">
                        <h2>{data.name}</h2>
                        <h1>{data.detail}</h1>
                        <p>{data.lorem}</p>
                        <p>{data.lorem2}</p>
                        </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export { About2 }