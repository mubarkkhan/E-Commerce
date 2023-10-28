import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { QRCode } from "react-qrcode-logo";

function Qrcode(){
    const {cartTotal}=useCart()
    const [money,setmoney]=useState(cartTotal)
    return(
        <>
        <div className="qrcode">
        <h3>Just now payment</h3>
            <QRCode
            value={`upi://pay?pa=7737621418@ibl&pn=Intellemo&tn=cftrhwetaw4gta&am=${money}`}
            size="150"
            logoHeight="100"
            logoWidth="70"
            logoOpacity="0.6"
            
            />
        </div>
        </>
    )
}
export{Qrcode}