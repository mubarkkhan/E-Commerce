import React from "react";

function About3(){
    const about3data=[
        {
            name:"Who we are",
            name1:"Our history",
            name2:"Our mission",
            detail:"Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
        }
    ]
    return(
        <>
        <div className="about3">
            {
                about3data.map((data)=>{
                    return(
                        <>
                        <div className="main">
                        <div className="box">
                        <h1>{data.name}</h1>
                        <p>{data.detail}</p>
                        </div>
                        </div>
                        <div className="main">
                        <div className="box">
                        <h1>{data.name1}</h1>
                        <p>{data.detail}</p>
                        </div>
                        </div>
                        <div className="main">
                       <div className="box">
                       <h1>{data.name2}</h1>
                        <p>{data.detail}</p>
                       </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{About3}