import React from "react";

function About4(){
    const about4data=[
        {
            number:"0+",
            name:"Glorious years"
        },
        {
            number:"90+",
            name:"Happy clients"
        },
        {
            number:"23+",
            name:"Projects complete"
        },
        {
            number:"60+",
            name:"Team advisor"
        },
        {
            number:"02+",
            name:"Products Sale"
        }
    ]
    return(
        <>
        <div className="about4">
            <div className="backgroundin">
            <div className="background">
                <div className="list">
                {
                    about4data.map((data)=>{
                        return(
                            <>
                            <div className="container">
                                <h1>{data.number}</h1>
                                <h2>{data.name}</h2>
                                </div>
                            </>
                        )
                    })
                }
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export{About4}