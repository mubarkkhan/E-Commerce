import React from "react";
import { Header } from "../home/header/header";
import { Aboutfirst } from "./about1";
import { Card } from "./aboutcard";
import { Vegetables } from "../screencomponents/vegetable";
import { Footer } from "../footer/footer";
import { LastFooter } from "../lastfooter/lastfooter";
import { About2 } from "./about2";
import { About3 } from "./about3";
import { About4 } from "./about4";
import { About5 } from "./about5";
function About(){
    return(
        <>
            <Header/>
            <Aboutfirst/>
            <Card/>
            <About2/>
            <About3/>
            <About4/>
            <About5/>
            <Vegetables/>
            <Footer/>
            <LastFooter/>
        </>
    )
}
export{About}