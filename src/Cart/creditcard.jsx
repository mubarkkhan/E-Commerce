import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Creditcard(){
    const paysubmit = (useNavigate);
    const [name,setname]=useState()
    const [surname,setsurname]=useState()
    const namechnage=(e)=>{
        setname(e.target.value)
    }
    const surnamechange=(e)=>{
        setsurname(e.target.value)
    }
    const changepaysubmit=()=>{
        if(name == "MUBARK" && surname == "KHAN"){
            setTimeout(()=>{
                paysubmit("/qrcode",{state:{name:name}})
            })
        }
        else{
            toast.error("user not found")
        }
    }
    return(
        <>
        <div className="payment">
            <div className="pinput">
                <input onChange={namechnage} type="name" placeholder="Name"/>
                <input onChange={surnamechange} type="name" placeholder="Surname"/>
                <input type="number" placeholder="Card number"/>
                <input type="number" placeholder="CVV"/>
                <input type="date" value="09/27/2023"/>
            </div>
            <div className="bu">
                <button onClick={changepaysubmit}>Submit</button>
            </div>
        </div>
        </>
    )
}
export{Creditcard}