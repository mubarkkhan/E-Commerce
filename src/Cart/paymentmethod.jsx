import React from "react";
import { Link } from "react-router-dom";

function Paymentmethod(){
    return(
        <>
        <div className="paymentmethod">
            <h3>Payment Method</h3>
            <input type="checkbox" />
            <Link to="/creditcard"><button>credit card</button></Link>
            <br />
            <input type="checkbox" />
            <Link to="/qrcode"><button>QR-Code</button></Link>
            <br />
            <input type="checkbox" />
            <Link to="/cashon"><button>Cash on Delievery</button></Link>
        </div>
        </>
    )
}
export{Paymentmethod}