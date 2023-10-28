import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "../star rating/star";
import { Sbuycarddata } from "../data/data";
import { useCart } from "react-use-cart";

function Sbuycard() {
    const [search, setsearch] = useState("");
    const { addItem, totalUniqueItems, inCart } = useCart()
    const [fav,setfav]=useState([])

    const addtofav=(e)=>{
        setfav([e])
    }

    return (
        <>
        <div className="favourite">
            {
                fav.map((favitem)=>{
                    return(
                        <>
                        <div className="card">
                                                <div key={favitem.id} className="item">
                                                    <h3>{favitem.new}</h3>
                                                    <img src={favitem.img} alt="" />
                                                    <h5>{favitem.span}</h5>
                                                    <h2>{favitem.productname}</h2>
                                                    <Star />
                                                    <h4>{favitem.nest}</h4>
                                                    <div className="rupiya">
                                                        <h1>{favitem.price}</h1>
                                                        <h6>{favitem.ripiya1}</h6>
                                                    </div>
                                                </div>
                                        </div>
                        </>
                    )
                })
            }
        </div>
            <div style={{ display: "block" }} className="leaf-flex">
                <div className="total">
                    <h4>{totalUniqueItems}</h4>
                </div>
                <div className="input">
                    <input onChange={(a) => { setsearch(a.target.value) }} type="text" placeholder="search here..." />
                </div>
                <h3 style={{ marginLeft: "20px", color: "#797979", marginBottom: "20px" }}>We found {Sbuycarddata.length} items for you!</h3>
                <div className="cardss">
                    {
                        Sbuycarddata.filter((data) => {
                            if (data == "") {
                                return data
                            }
                            else if (data.productname.toLowerCase().includes(search.toLowerCase())) {
                                return data
                            }
                        })
                            .map((data) => {

                                return (
                                    <>
                                        <div className="card">
                                                <div key={data.id} className="item">
                                                    <h3>{data.new}</h3>
                                                    <Link to={`/shopdetail/${data.id}`}>
                                                    <img src={data.img} alt="" />
                                                    </Link>
                                                    <h5>{data.span}</h5>
                                                    <h2>{data.productname}</h2>
                                                    <Star />
                                                    <h4>{data.nest}</h4>
                                                    <div className="rupiya">
                                                        <h1>{data.price}</h1>
                                                        <h6>{data.ripiya1}</h6>
                                                    </div>
                                                    <div className="bu">
                                                        {inCart(data.id) ? <Link style={{color:"blue"}} to="/cart"><button>Added</button></Link> : <button onClick={()=>{addItem(data)}}>Add to Cart</button>}
                                                    <Link to="/favourite"><button onClick={()=>{addtofav(data)}}>Favourite</button></Link>
                                                    </div>
                                                </div>
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
export { Sbuycard }