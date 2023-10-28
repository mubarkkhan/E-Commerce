import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login(){
    const loginpath=useNavigate()
    const [email,setemail]=useState();
    const [Password,setpassword]=useState();
    const changevalue=(a)=>{
        setemail(a.target.value)
    }
    const changevalue1=(a)=>{
        setpassword(a.target.value)
    }
    const Click=(a)=>{
        // a.preventDefault(a)
        // if(email=="m" && Password=="1"){
            toast.success("User I`d is success")
            setTimeout(()=>{
                loginpath("/home")
            },2000)
        // }
        // else{
        //     toast.error("User Not Found")
        // }
    }
    return(
        <>
        <ToastContainer position="top-center"/>
        <div className="login-container">
            <div className="content">
            <div className="login">
                <h1>Login</h1>
                <input onChange={changevalue} type="Email" placeholder="Enter Your Username" required/>
                <br />
                <input onChange={changevalue1} type="Password" placeholder="Enter Your Password" required/>
                <br />
                <button onClick={Click}>Login</button>
            </div>
            </div>
        </div>
        </>
    )
}
export{Login}