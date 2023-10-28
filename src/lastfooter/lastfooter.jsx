import React from "react";
import { Footerfirst } from "./footer1";
import { Footersecond } from "./footer2";
import { Footerthird } from "./footer3";

function LastFooter(){
    return(
        <>
        <div className="last-flex">
        <Footerfirst/>
        <Footersecond/>
        <Footerthird/>
        </div>
        </>
    )
}
export{LastFooter}