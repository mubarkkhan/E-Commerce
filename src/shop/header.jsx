import React, { useState } from "react";
import logoimg from "../home/header/logo.jpg"
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { menutext } from "../data/data";

function Sheader() {
    
    return (
        <>
            <div className="header-content">
                    <div className="logo">
                        <Link to="/home"><img src={logoimg} alt="" /></Link>
                    </div>
                    <div className="menu-icon">
                    <div style={{border:"none"}} className="flex">
                    <div className="header-menu-text">
                        {
                            menutext.map((data) => {
                                return (
                                    <>
                                        <li><Link to={data.path}>{data.name}</Link></li>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="cart-icon">
                        <Link to="/cart"><h4><AiOutlineShoppingCart/></h4></Link>
                    </div>
                    </div>
                    </div>
            </div>
        </>
    )
}
export { Sheader }