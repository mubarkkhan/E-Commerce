import React, { useEffect, useState } from "react";


function Apifetchdata(){
    
    const [data,setdata]=useState([])
    const [button,setbutton]=useState([])
   async function mydata(){
        const webdata = await fetch("https://fakestoreapi.com/products")
        const updatedata = await webdata.json()
        setdata(updatedata)
        setbutton(data)
    }
    useEffect(()=>{
        mydata()
    },[])

    function filterbutton(type){
        const result = data.filter((item)=>item.category==type)
        setbutton(result)
    }
    function filterbutton1(type){
        const result = data.filter((item)=>item.rating.rate>type)
        setbutton(result)
    }
    function filterbutton2(type){
        const result = data.filter((item)=>item.rating.rate<type)
        setbutton(result)
    }
    function filterbutton3(type){
        const result = data.filter((item)=>item.price>type)
        setbutton(result)
    }
    function filterbutton4(type){
        const result = data.filter((item)=>item.price<type)
        setbutton(result)
    }
    const all=()=>{
        setbutton(data)
    }
    const changevalue =(a)=>{
        const getvalue = a.target.value
        const updatevalue = button.filter((filteritem)=>filteritem.category.toLowerCase().startsWith(getvalue))
        if(getvalue){
            setbutton(updatevalue)
        }
        else{
            setbutton(data)
        }
    }
    
    return(
        <>
        <div className="input">
        <input onChange={changevalue} type="text" placeholder="search here..."/>
        </div>
        {/* <div className="bu">
        <button onClick={()=>{all()}}>All</button>
        <button onClick={()=>{filterbutton("men's clothing")}}>men</button>
        <button onClick={()=>{filterbutton("women's clothing")}}>women</button>
        <button onClick={()=>{filterbutton("jewelery")}}>jewelery</button>
        <button onClick={()=>{filterbutton("electronics")}}>electronics</button>
        <button onClick={()=>{filterbutton1(3)}}>up to 3 rating</button>
        <button onClick={()=>{filterbutton2(3)}}>less than 3 rating</button>
        <button onClick={()=>{filterbutton3(100)}}>up to 100</button>
        <button onClick={()=>{filterbutton4(100)}}>less than 100</button>
        </div> */}
        <div className="api">
            {
             data && button.map((element)=>{
                    const {id,title,image,category,description,price,rating,rate} = element
                    return(
                        <>
                        <div key={id} className="card">
                        <h2>{title}</h2>
                        <img src={image} alt="img" />
                        <h4>{category}</h4>
                        <p>{description}</p>
                        <p>rating : {rating.rate}</p>
                        <h5>{price}</h5>
                        </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
    
}
export{Apifetchdata}