import React from "react";
import card1img from "../image/1.5b1776e2a1d7ec897722f605a8118984.svg"
import card2img from "../image/2.622b96aa8375916171721496261f6986.svg"
import card3img from "../image/3.a41b48d5c6678b96129a842057548c86.svg"
import card4img from "../image/4.84d7a8a08622e302a2d50459d2cddb62.svg"
import card5img from "../image/5.e85986742a6c5c3748db8c239b11dd57.svg"
import card6img from "../image/6.52cd022b53f13b12f573a0dd57fc804e.svg"

function Card(){
    const carddata=[
        {
            img:`${card1img}`,
            text:"Best Price & Offers",
            detail:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            button:"Read More"
        },
        {
            img:`${card2img}`,
            text:"Wide Assortment",
            detail:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            button:"Read More"
        },
        {
            img:`${card3img}`,
            text:"Free Delivery",
            detail:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            button:"Read More"
        },
        {
            img:`${card4img}`,
            text:"Easy Returns",
            detail:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            button:"Read More"
        },
        {
            img:`${card5img}`,
            text:"100% Satisfaction",
            detail:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            button:"Read More"
        },
        {
            img:`${card6img}`,
            text:"Great Daily Deal",
            detail:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            button:"Read More"
        },
    ]
    return(
        <>
        <div className="card-container">
            <div className="logo">
                <h1>What We Provide?</h1>
            </div>
            <div className="card">
                {
                    carddata.map((data)=>{
                        return(
                            <>
                            <div className="cards">
                            <img src={data.img} alt="" />
                            <h1>{data.text}</h1>
                            <p>{data.detail}</p>
                            <button>{data.button}</button>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export{Card}