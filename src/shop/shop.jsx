import React from "react";
import { Vegetables } from "../screencomponents/vegetable";
import { Footer } from "../footer/footer";
import { LastFooter } from "../lastfooter/lastfooter";
import { Dealof } from "../screencomponents/dealoftheday";
import { Category } from "./category";
import { Sheader } from "./header";
import { Sbuycard } from "./shopcard";
import { Sell } from "./sell";

function Shop(){
    return(
        <>
        <Sheader/>
        <Sell/>
        <div style={{marginTop:"20px",border:"none"}} className="flex">    
        <Category/>
        <Sbuycard/>
        </div>
        <Dealof/>
        <Vegetables/>
        <Footer/>
        <LastFooter/>
        </>
    )
}
export{Shop}