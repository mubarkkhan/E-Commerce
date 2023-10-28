import React from "react";
import { Link } from "react-router-dom";
import Countdown from 'react-countdown';
import sellimg from "../image/sale.jpeg"

function Sell(){
    const Sellbutton = () => <Link to="/sellcard"><button className="sellbu">You are good to go!</button></Link>;
    return(
        <>
       <div className="sell">
        {/* <span>Sell start in</span> */}
       <Countdown date={Date.now() + 4000}>
        <Sellbutton/>
        </Countdown>
        <div className="sell-img">
        <img src={sellimg} alt="" />
        </div>
       </div>
        </>
    )
}
export{Sell}