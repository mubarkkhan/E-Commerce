import React from "react";
import { Link } from "react-router-dom";

function FooterC(){
    const footerbdata=[
        {
            text:"Account",
        },
        {
            name:"Sign in",
            path:"/home"
        },
        {
            name:"View Cart",
            path:"/home"
        },
        {
            name:"My whislist",
            path:"/home"
        },
        {
            name:"track my order",
            path:"/home"
        },
        {
            name:"help ticket",
            path:"/home"
        },
        {
            name:"shipping detail",
            path:"/home"
        },
        {
            name:"product detail",
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
export{FooterC}