import React from "react";

function Sliderimg(props){
    return(
        <>
        <div className="slider-content">
            <div className="slider">
                <div className="content">
                <img src={props.myimg}/>
                <h1>{props.head1}</h1>
                <p>{props.head2}</p>
                <input type="text" placeholder={props.head3}/>
                <button>{props.head4}</button>
                </div>
            </div>
        </div>
        </>
    )
}
export{Sliderimg}