import React from "react";
import { Link } from "react-router-dom";

function FooterE(){
    const footerbdata=[
        {
            text:"Popular",
        },
        {
            name:"Milkshake",
            path:"/home"
        },
        {
            name:"Butter & marginixder",
            path:"/home"
        },
        {
            name:"Eggs subtricter",
            path:"/home"
        },
        {
            name:"Mrmalades",
            path:"/home"
        },
        {
            name:"chees",
            path:"/home"
        },
        {
            name:"buuterscotch",
            path:"/home"
        },
        {
            name:"Tea & coffee",
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
export{FooterE}