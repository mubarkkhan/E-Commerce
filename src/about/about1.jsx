import React from "react";
import about1img from "../image/girl.a639f5a270d0eb793b60.png"
import about2img from "../image/about-3.ee4f0499822641223ce5.png"
import about3img from "../image/about-4 (1).07508f1134e6e9cd28a1.png"
import about4img from "../image/about-4.07508f1134e6e9cd28a1.png"

function Aboutfirst(){
    const aboutfirstdata=[
        {
            img:`${about1img}`,
            img1:`${about2img}`,
            img2:`${about3img}`,
            img3:`${about4img}`,
            detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            detail1:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200",
            text:"Welcome to Walmart"
        }
    ]
    return(
        <>
        <div className="about-container">
            <div className="image">
                {
                    aboutfirstdata.map((data)=>{
                        return(
                            <>
                            <img src={data.img} alt="" />
                            </>
                        )
                    })
                }
            </div>
            <div className="detail">
                {
                    aboutfirstdata.map((data)=>{
                        return(
                            <>
                            <h1>{data.text}</h1>
                            <p>{data.detail}</p>
                            <p>{data.detail1}</p>
                            <div className="img">
                                <img src={data.img1} alt="" />
                                <img src={data.img2} alt="" />
                                <img src={data.img3} alt="" />
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
export{Aboutfirst}