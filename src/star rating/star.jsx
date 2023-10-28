import React from "react";
import { stardata } from "../data/data";

function Star() {

    return (
        <>
            <div className="star">
                {
                    stardata.map((data) => {
                        return (
                            <>
                                <span>{data.star}</span>
                                <span>{data.star1}</span>
                                <span>{data.star2}</span>
                                <span>{data.star3}</span>
                                <span>{data.star4}</span>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export { Star }