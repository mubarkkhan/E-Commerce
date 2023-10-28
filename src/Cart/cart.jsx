import { useCart } from "react-use-cart"
import { Star } from "../star rating/star"
import { Link } from "react-router-dom"

const Cart = () => {
    const { items,
        removeItem,
        isEmpty,
        updateItemQuantity,
        cartTotal,
        quantity,
        totalUniqueItems }
        = useCart()


    if (isEmpty) {
        return <h3 style={{ textAlign: "center", marginTop: "50px", fontSize: "25px", color: "red" }}>Oops your cart is empty</h3>
    }
    return (
        <>
            <div className="cart">
                <h2 style={{ textAlign: "center", margin: "0px 10px" }}> You have total {totalUniqueItems} items</h2>
                {
                    items.map((data) => {
                        if (data.quantity >= data.available) {
                            return (
                                <div key={data.id} className="item">
                                    <div className="image">
                                        <h2>Sold out</h2>
                                        <img style={{ opacity: "0.5", filter: "blur(1px)" }} src={data.img} alt="" />
                                    </div>
                                    <div className="ctext">
                                        <h5>{data.span}</h5>
                                        <h2>{data.productname}</h2>
                                        <Star />
                                        <h4>{data.nest}</h4>
                                        <div className="rupiya">
                                            <h4 style={{ marginTop: "5px", marginRight: "10px", fontSize: "18px" }}>Price:</h4>
                                            <h3 style={{ marginTop: "5px", marginBottom: "5px" }}>{data.price}</h3>
                                        </div>
                                        <button style={{ padding: "2px 8px", color: "white", backgroundColor: "green", borderRadius: "7px", border: "none", fontSize: "22px", display: "none" }} onClick={() => { updateItemQuantity(data.id, data.quantity + 1) }}>+</button>
                                        <span style={{ marginLeft: "20px" }}>{data.quantity}</span>
                                        <button style={{ padding: "2.1px 10px", color: "white", backgroundColor: "red", marginLeft: "25px", marginRight: "10px", borderRadius: "7px", border: "none", fontSize: "22px" }} onClick={() => { updateItemQuantity(data.id, data.quantity - 1) }}>-</button>
                                        <button style={{ padding: "7px 40px", marginLeft: "30px", backgroundColor: "black", color: "white", borderRadius: "7px", border: "none" }} onClick={() => { removeItem(data.id) }}>delete</button>
                                    </div>
                                </div>
                            )
                        }
                      
                        return (
                            <>
                                <div key={data.id} className="item">
                                    <div className="image">
                                        <img src={data.img} alt="" />
                                    </div>
                                    <div className="ctext">
                                        <h5>{data.span}</h5>
                                        <h2>{data.productname}</h2>
                                        <Star />
                                        <h4>{data.nest}</h4>
                                        <div className="rupiya">
                                            <h4 style={{ marginTop: "5px", marginRight: "10px", fontSize: "18px" }}>Price:</h4>
                                            <h3 style={{ marginTop: "5px", marginBottom: "5px" }}>{data.price}</h3>
                                        </div>
                                        <button style={{ padding: "2px 8px", color: "white", backgroundColor: "green", borderRadius: "7px", border: "none", fontSize: "22px" }} onClick={() => { updateItemQuantity(data.id, data.quantity + 1) }}>+</button>
                                        <span style={{ marginLeft: "20px" }}>{(data.quantity===1) ? `1` : `${data.quantity}`}</span>
                                        <button style={{ padding: "2.1px 10px", color: "white", backgroundColor: "red", marginLeft: "25px", marginRight: "10px", borderRadius: "7px", border: "none", fontSize: "22px" }} onClick={() => { updateItemQuantity(data.id, data.quantity - 1) }}>-</button>
                                        <button style={{ padding: "7px 40px", marginLeft: "30px", backgroundColor: "black", color: "white", borderRadius: "7px", border: "none" }} onClick={() => { removeItem(data.id) }}>delete</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="cart-check">
                <h3>Total Price:{cartTotal}</h3>
                <Link to="/paymentmethod"><button>Check out</button></Link>
            </div>
        </>
    )
}
export { Cart }