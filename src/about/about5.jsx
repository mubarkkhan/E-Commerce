import React from "react";
import about5img1 from "../image/girl1.370e998a5720a8f77ca6.png"
import about5img2 from "../image/girl2.0f06832c1b5941e9e5bf.png"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function About5(){
    const about5data=[
        {
            team:"Our Team",
            name:"Meet Our Expert Team",
            lorem:"Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.",
            lorem1:"Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.",
            button:"View All Members"
        },
    ]
  const  about5data1=[
        {
            img:`${about5img1}`,
            name:"H. Merinda",
            post:"CEO & Co-Founder",
            icon1:<FaFacebook/>,
            icon2:<FaTwitter/>,
            icon3:<FaInstagram/>,
            icon4:<FaYoutube/>
        },
        {
            
            img:`${about5img2}`,
            post:"Head Engineer",
            name:"Dilan Specter" ,
            icon1:<FaFacebook/>,
            icon2:<FaTwitter/>,
            icon3:<FaInstagram/>,
            icon4:<FaYoutube/>
        },
    ]
        
    
    return(
        <>
        <div className="what">
                <h1>Our Team</h1>
            </div>
        <div className="about5">
            {
                about5data.map((data)=>{
                    return(
                        <>
                       <div className="maintext">
                       <div className="text">
                            <h5>{data.team}</h5>
                            <h1>{data.name}</h1>
                            <p>{data.lorem}</p>
                            <p>{data.lorem1}</p>
                            <button>{data.button}</button>                            
                        </div>
                       </div>
                        </>
                    )
                })
            }
            <div className="main">
            {
                about5data1.map((data)=>{
                    return(
                        <>
                            <div className="image">
                            <div className="img">
                            <img src={data.img} alt="" />
                            </div>
                            <div className="detail">
                            <div className="text">
                            <h1>{data.name}</h1>  
                            <p>{data.post}</p> 
                            <div className="icon">
                            <h4>{data.icon1}</h4>
                            <h4>{data.icon2}</h4>
                            <h4>{data.icon3}</h4>
                            <h4>{data.icon4}</h4>
                        </div>
                            </div>
                            </div>  
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
export{About5}