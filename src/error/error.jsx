import React from "react";
import { Link } from "react-router-dom";
import errorimg from "../image/error.webp"
import errorimg1 from "../home/header/logo.jpg"

function Error(){
    const errordata=[
        {
            img1:`${errorimg1}`,
            img:`${errorimg}`,
            name1:"Oops",
            name:"Something's wrong here.",
            button:"Logout"
        }
    ]
    return(
        <>
        <div className="error">
            {
                errordata.map((data)=>{
                    return(
                        <>
                        <div className="a">
                            <div className="img">
                            <img src={data.img1} alt="" />
                            </div>
                            <div className="bu">
                            <button><Link to="/">{data.button}</Link></button>
                            </div>
                        </div>
                        <div className="b">
                            <img src={data.img} alt="" />
                            <h1>{data.name1}</h1>
                            <h2>{data.name}</h2>
                        </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{Error}