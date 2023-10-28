import React from "react";

function Footerfirst(){
    const footerfirstdata=[
        {
            c:"© 2023, Walmart - HTML Ecommerce Template",
            copy:"Copyright All right reserved By",
            name:"Mubark Khan",
            designed:"Designed and Developed By",
            name1:"Mubark Khan"
        }
    ]
    return(
        <>
        <div className="footer-first">
            {
                footerfirstdata.map((data)=>{
                    return(
                        <>
                        <p>{data.c}</p>
                        <p>{data.copy}<span>{data.name}</span></p>                      
                        <p>{data.designed} <span>{data.name1}</span></p>                     
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{Footerfirst}