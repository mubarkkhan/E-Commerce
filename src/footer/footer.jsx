import React from "react";
import { FooterA } from "./footerA";
import { FooterB } from "./footerB";
import { FooterC } from "./footerC";
import { FooterD } from "./footerD";
import { FooterE } from "./footerE";
import { FooterF } from "./footerF";

function Footer(){
    return(
        <>
        <div className="flex">
        <FooterA/>
        <FooterB/>
        <FooterC/>
        <FooterD/>
        <FooterE/>
        <FooterF/>
        </div>
        </>
    )
}
export{Footer}