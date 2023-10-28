import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./header/header";
import { Addcard } from "../screencomponents/shopcard";
import { Sliderpage } from "../screencomponents/sliderpage";
import { Buycard } from "../screencomponents/buycard";
import { Buyheader } from "../screencomponents/buycardheader";
import { Bestdeal } from "../screencomponents/dailysell";
import { Dealof } from "../screencomponents/dealoftheday";
import { Vegetables } from "../screencomponents/vegetable";
import { Footer } from "../footer/footer";
import { LastFooter } from "../lastfooter/lastfooter";
import { Featured } from "../screencomponents/featured";


function Home() {
    // const logindata = useLocation()
    return (
        <>
            {/* <h1 style={{ textAlign: "center", width: "75%", backgroundColor: "#306373", margin: "auto", color: "white", padding: "15px 0px" }}>Your Most Welcome {logindata.state.email}</h1> */}
            <Header />
            <Sliderpage />
            <Featured/>
            <Addcard/>
            <Buyheader/>
            <Buycard/>
            <Bestdeal/>
            <Dealof/>
            <Vegetables/>
            <Footer/>
            <LastFooter/>
        </>
    )
}
export { Home }