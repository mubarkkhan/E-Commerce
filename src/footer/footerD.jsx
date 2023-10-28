import React from "react";
import { Link } from "react-router-dom";

function FooterD(){
    const footerbdata=[
        {
            text:"Corporate",
        },
        {
            name:"Become a vendor",
            path:"/home"
        },
        {
            name:"Farm house",
            path:"/home"
        },
        {
            name:"Farmer",
            path:"/home"
        },
        {
            name:"Farm conditions",
            path:"/home"
        },
        {
            name:"farm carreer",
            path:"/home"
        },
        {
            name:"Our supliers",
            path:"/home"
        },
        {
            name:"Our pormotions",
            path:"/home"
        }
    ]
    return(
        <>
        <div className="footerb">
            <div className="content">
                {
                    footerbdata.map((data)=>{
                        return(
                            <>
                            <h1>{data.text}</h1>
                            <li><Link to={data.path}>{data.name}</Link></li>
                            </>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export{FooterD}