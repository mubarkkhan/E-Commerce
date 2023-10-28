import React, { useState } from "react";

function Price() {
    const pricedata = [
        {
            button: "+",
            button1: "-",
            button2: "Add to Cart"
        }
    ]
    const [count, setcount] = useState(70)
    const [item, setitem] = useState(1)

    const increase = () => {
        if (item == 10) {

        }
        else { setitem(item + 1) }
        if (count == 700) {

        }

        else {
            setcount(count + 70)
        }
    }
    const decrease = () => {
        if (item == 1) {

        }
        else { setitem(item - 1) }
        if (count == 70) {
        }
        else {
            setcount(count - 70)
        }
    }
    return (
        <>

            <div className="price">
                {
                    pricedata.map((data) => {
                        return (
                            <>
                                <div className="rupee">
                                    <h1 style={{ fontSize: "20px", color: "#43f243", marginLeft: "10px" }}>${count}</h1>
                                </div>
                                <div className="bu">
                                    <div className="bu1">
                                    <button className="bu1" onClick={increase} style={{ backgroundColor: "green", color: "white", padding: "0px 7px", fontSize: "20px", border: "2px solid green", borderRadius: "5px" }}>{data.button}</button>
                                    </div>
                                    <span>{item}</span>
                                    <div className="bu2">
                                    <button style={{ backgroundColor: "red", padding: "0px 8px", fontSize: "20px", marginLeft: "12px",marginRight:"5px", border: "2px solid red", borderRadius: "5px" }} className="bu2" onClick={decrease}>{data.button1}</button>
                                    </div>
                                    <div className="bu3">
                                    <button style={{ padding: "10px", margin: "5px 10px 10px 5px", backgroundColor: "green", color: "white", border: "2px solid green", borderRadius: "5px" }}>{data.button2}</button>
                                        </div>                                                                    
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export { Price }