import React, { useState } from "react";
import logoimg from "./logo.jpg"
import { Link } from "react-router-dom";
import { menutext } from "../../data/data";
import { HiOutlineBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";

function Header() {
    const [toggle,settoggle]=useState(false)
    const click1=()=>{
        settoggle(true)
    }
    const click2=()=>{
        settoggle(false)
    }
    return (
        <>
            <div className="header-content">
            <div className="t1">
            <button onClick={click1} className={`${(toggle === true) ? "open1" : "close1"}`}><HiOutlineBars3/></button>
            </div>
                    <div className="logo">
                        <Link to="/home"><img src={logoimg} alt="" /></Link>
                    </div>
                    <div className="hinput">
                        <input type="text" placeholder="search here..."/>
                    </div>
                    <div className={`${(toggle === true) ? "open" : "close"}`}>
                        <div className="t2">
                        <button onClick={click2} className={`${(toggle === false) ? "open2" : "close2"}`}><GrClose/></button>
                        </div>
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
                    </div>
            </div>
        </>
    )
}
export { Header }