import React from "react";
import { useParams } from "react-router-dom";
import { shopdetaildata } from "../data/shopdetaildata";
import { Star } from "../star rating/star";

function Shopdetail() {
    const { ShopId } = useParams()
    const shopdetail = shopdetaildata.find(itemdetail => itemdetail.id === ShopId)
    return (
        <>
            <div className="shopdetail-card">
                <div key={shopdetail.id} className="item">
                    <div className="image">
                        <h3>{shopdetail.new}</h3>
                        <img src={shopdetail.img} alt="" />
                    </div>
                    <div className="text">
                        <h5>{shopdetail.span}</h5>
                        <h2>{shopdetail.productname}</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, asperiores sed. Inventore facere assumenda magni porro dolores repellendus eum laboriosam, nesciunt, ullam, dignissimos voluptate accusantium excepturi tempora fugiat rerum delectus.</p>
                        <Star />
                        <h4>{shopdetail.nest}</h4>
                        <div className="rupiya">
                            <h1>{shopdetail.price}</h1>
                            <h6>{shopdetail.ripiya1}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Shopdetail }