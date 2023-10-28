import React from "react";
import { FaDollarSign } from "react-icons/fa6";
import categoryimg1 from "../image/milk&diaries.jpeg"
import categoryimg2 from "../image/clothing.jpeg"
import categoryimg3 from "../image/petfood.jpeg"
import categoryimg4 from "../image/baking-material.webp"
import categoryimg5 from "../image/vege & fruits.jpeg"
import categoryimg6 from "../image/mango-juice.webp"
import categoryimg7 from "../image/mango-juice-b.webp"
import { Star } from "../star rating/star";

function Category(){
    const categorydata1=[
        {
            name:"Category"
        }
    ]
    const categorydata2=[
        {
            img:`${categoryimg1}`,
            milk:"Milk & Dairies",
            num:"0"
        },
        {
            img:`${categoryimg2}`,
            milk:"Clothing",
            num:"0"
        },
        {
            img:`${categoryimg3}`,
            milk:"Pet Food",
            num:"0"
        },
        {
            img:`${categoryimg4}`,
            milk:"Baking Material",
            num:"0"
        },
        {
            img:`${categoryimg5}`,
            milk:"Vegetables & Fruits",
            num:"0"
        },
    ]
    const categorydata3=[
        {
            name:"Fill By Price"
        }
    ]
    const categorydata4=[
        {
            name:"Choose Your color:",
            detail1:" Red (56)",
            detail2:" Green (54)",
            detail3:" Blue (52)"
        }
    ]
    const categorydata5=[
        {
            name:"Item Condition:",
            detail1:"New (1556)",
            detail2:"Refurbished (154)",
            detail3:"Used (52)",
            button:"Filter"
        }
    ]  
    const categorydata6=[
        {
            name:"New Products"
        }
    ]
    const categorydata7=[
        {
            img:`${categoryimg6}`,
            name:"chen sweater",
            rupee:"50"
        },
        {
            img:`${categoryimg6}`,
            name:"chen sweater",
            rupee:"50"
        },
        {
            img:`${categoryimg6}`,
            name:"chen sweater",
            rupee:"50"
        }
    ]
    const categorydata8=[
        {
            img:`${categoryimg7}`,
            name:"Organic",
            ofer:"save 17% on organic juice"
        },
        {
            img:`${categoryimg7}`,
            name:"Organic",
            ofer:"save 17% on organic juice"
        },
        {
            img:`${categoryimg7}`,
            name:"Organic",
            ofer:"save 17% on organic juice"
        }
    ]
    return(
        <>
        <div className="categorymain">
            <div className="categorymn">
            <div className="categoryh">
                {
                    categorydata1.map((data)=>{
                        return(
                            <>
                            <h3>{data.name}</h3>
                            </>
                        )
                    })
                }
            </div>
            <div className="category-data">
                {
                    categorydata2.map((data)=>{
                        return(
                            <>
                            <div className="item">
                                <img src={data.img} alt="" />
                                <span>{data.milk}</span>
                                <span><h6>{data.num}</h6></span>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            </div>
            <div className="category-detail">
                <div className="category-detailh">
                {
                    categorydata3.map((data)=>{
                        return(
                            <>
                            <h3>{data.name}</h3>
                            </>
                        )
                    })
                }
                </div>
                {
                    categorydata4.map((data)=>{
                        return(
                            <>
                            <div className="check">
                            <h4>{data.name}</h4>
                            <input type="checkbox" />
                            <label>{data.detail1}</label>
                            <br />
                            <input type="checkbox" />
                            <label>{data.detail2}</label>
                            <br />
                            <input type="checkbox" />
                            <label>{data.detail3}</label>                                                      
                            </div>
                            </>
                        )
                    })
                }
                {
                    categorydata5.map((data)=>{
                        return(
                            <>
                            <div className="check">
                            <h4>{data.name}</h4>
                            <input type="checkbox" />
                            <label>{data.detail1}</label>
                            <br />
                            <input type="checkbox" />
                            <label>{data.detail2}</label>
                            <br />
                            <input type="checkbox" />
                            <label>{data.detail3}</label> 
                            <br />  
                            <button>{data.button}</button>                                                   
                            </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="new-product">
                <div className="new">
                {
                    categorydata6.map((data)=>{
                        return(
                            <>
                            <h2>{data.name}</h2>
                            </>
                        )
                    })
                }
                </div>
                <div className="image">
                    {
                        categorydata7.map((data)=>{
                            return(
                                <>
                                <div className="mango">
                                <div className="img">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="text">
                                    <h4>{data.name}</h4>
                                    <h6><span><FaDollarSign /></span>{data.rupee}</h6>
                                    <Star/>
                                </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className="botel">
                {
                    categorydata8.map((data)=>{
                        return(
                            <>
                            <div className="bimg">
                            <img src={data.img} alt="" />
                            </div>
                            <div className="text">
                            <p>{data.name}</p>                           
                            <h2>{data.ofer}</h2>
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
export{Category}