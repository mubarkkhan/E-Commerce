import bannerimg1 from "../image/onion.jpeg1.png"
import bannerimg2 from "../image/banner-2.webp"
import bannerimg3 from "../image/banner3.png"
import productimg1 from "../image/product-1-1 - Copy.b6014f69e378206a53e3.jpg"
import productimg2 from "../image/product-2-2 - Copy.e0a56e874a6703295fe8.jpg"
import productimg3 from "../image/product-4-2 - Copy.7066ae27150971779333.jpg"
import productimg4 from "../image/product-5-2 - Copy.56a742ee2e1068a30ea2.jpg"
import productimg5 from "../image/product-6-2 - Copy.acb0d53c35e35d8981bc.jpg"
import productimg6 from "../image/product-7-2 - Copy.f235488f0fdef7cbbf6f.jpg"
import productimg7 from "../image/product-8-2 - Copy.1274ae5bee5b1ea22c28.jpg"
import productimg8 from "../image/product-9-2 - Copy.4ec9e3d811899a93dfc3.jpg"
import feaimg1 from "../image/cat-1 - Copy.ac89b9d18a5077eac3e8.png"
import feaimg2 from "../image/cat-11 - Copy.1b39a1174f4b4137bbbd.png"
import feaimg3 from "../image/cat-3 - Copy.9fadc9e19d2826cec910.png"
import feaimg4 from "../image/cat-2 - Copy.fc1c1db18d79f5d98fe7.png"
import feaimg5 from "../image/cat-5 - Copy.aad30d7464c1b497bb8d.png"
import feaimg6 from "../image/cat-9 - Copy.b47d8bf4d6f4e0bca756.png"
import feaimg7 from "../image/cat-14 - Copy.63624f8871ae4ec4f3a9.png"
import feaimg8 from "../image/cat-15 - Copy.ca75690e37dc381e9f0c.png"
import feaimg9 from "../image/cat-4 - Copy.5462cff6c1821944c2b7.png"
import dealimg1 from "../image/banner-5 - Copy.2b745c4df4b8bb5a3551.png"
import dealimg2 from "../image/banner-6 - Copy.5dabe71122d6b34207d8.png"
import dealimg3 from "../image/banner-7 - Copy.a6f954ef28925b2c75df.png"
import dealimg4 from "../image/banner-8 - Copy.f868b387cbf414d1b7d0.png"
import logoimg from "../home/header/logo.jpg"
import { FaDollarSign } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import leafimg from "../image/Untitled+design-11.png"
import { BsFillSendFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { CiAlarmOn } from "react-icons/ci";
const menutext=[
    {
        name:"HOME",
        path:"/home"
    },
    {
        name:"ABOUT",
        path:"/about"
    },
    {
        name:"SHOP",
        path:"/shop"
    },
    {
        name:"SERVICES",
        path:"*"
    },
    {
        name:"COMPANY",
        path:"*"
    },
    {
        name:"CONTACT US",
        path:"*"
    }  
]
export{menutext}
////
const adddata=[
    {
        img:`${bannerimg1}`,
        name:"Everyday Fresh & Clean with Our Products",
        button:"Shop Now"
    },
    {
        img:`${bannerimg2}`,
        name:"Make your breakfast Healthy & easy",
        button:"Shop Now"
    },
    {
        img:`${bannerimg3}`,
        name:"The best organic products Online",
        button:"Shop Now"
    }

]
export{adddata}
/// sliderdata
const sliderdata=[
    {
        text:"Fresh Fruits And Big Discount",
        offer:"Save upto 50% on your first order",
        input:"Enter Your Email Address",
        icon:<BsFillSendFill/>,
        button:"Subscribe"
    }
]
export{sliderdata}
/// featuredata
const featurdata=[
    {
        logo:"Featured Category"
    }
]
export{featurdata}
    const Featurdata1=[
        {
            name:"cake & milk"
        },
        {
            name:"coffee & tea"
        },
        {
            name:"pet foods"
        },
        {
            name:"vegetables"
        },
    ]
    export{Featurdata1}
    const featurdata2=[
        {
            img:`${feaimg1}`,
            name:"Vegetables"
        },
        {
            img:`${feaimg2}`,
            name:"Peach"
        },
        {
            img:`${feaimg3}`,
            name:"Snack"
        },
        {
            img:`${feaimg4}`,
            name:"Strawberry"
        },
        {
            img:`${feaimg5}`,
            name:"Custard Apple"
        },
        {
            img:`${feaimg1}`,
            name:"Vegetables"
        },
        {
            img:`${feaimg6}`,
            name:"Red Apple"
        },
        {
            img:`${feaimg7}`,
            name:"Tea & Coffe"
        },
        {
            img:`${feaimg8}`,
            name:"Headphone"
        },
        {
            img:`${feaimg9}`,
            name:"Black Plum"
        },
    ]
    export{featurdata2}
//buyheaderdata
const buyheaderdata=[
    {
        logo:"Popular products"
    },
    {
        name:"All"
    },
    {
        name:"Milk & Dairies"
    },
    {
        name:"Coffe & Teas"
    },
    {
        name:"Pet Foods"
    },
    {
        name:"Meat"
    },
    {
        name:"Vegetables"
    },
    {
        name:"Fruits"
    }
]
export{buyheaderdata}
//buycarddata
const buycarddata=[
    {
        new:"New",
        img:`${productimg1}`,
        span:"Snack",
        productname:"Bandy blandy",
        nest:"Nest Food",
        drupee:"100"
    },
    {
        new:"New",
        img:`${productimg2}`,
        span:"Snack",
        productname:"French fries",
        nest:"Nest Food",
        drupee:"100"
    },
    {
        new:"New",
        img:`${productimg3}`,
        span:"Snack",
        productname:"Sweet patato & Nut cracker",
        nest:"Nest Food",
        drupee:"100"
    },
    {
        new:"New",
        img:`${productimg4}`,
        span:"Snack",
        productname:"Peanuts cracker",
        nest:"Nest Food",
        drupee:"100"
    },
    {
        new:"New",
        img:`${productimg5}`,
        span:"Snack",
        productname:"Uliaa juice",
        nest:"Nest Food",
        drupee:"100"
    },
    {
        new:"New",
        img:`${productimg6}`,
        span:"Snack",
        productname:"Sweets pista",
        nest:"Nest Food",
        drupee:"100"
    },
    {
        new:"New",
        img:`${productimg7}`,
        span:"Skin care",
        productname:"Yuija nuican",
        nest:"Nest Food",
        drupee:"100"
    },
    {
        new:"New",
        img:`${productimg8}`,
        span:"Snack",
        productname:"Green tea with snacks",
        nest:"Nest Food",
        drupee:"100"
    }
]
    export{buycarddata}
//Sbuycarddata
const Sbuycarddata=[
    {
        id:1,
        new:"New",
        img:`${productimg1}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:150.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:5
        
    },
    {id:2,
        new:"New",
        img:`${productimg2}`,
        span:"Snack",
        productname:"ceed of change organic quites",
        nest:"Nest Food",
        price:100.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:4
    },
    {
        id:3,
        new:"New",
        img:`${productimg3}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:80.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:3
    },
    {
        id:4,
        new:"New",
        img:`${productimg4}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:80.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:8
        
    },
    {
        id:5,
        new:"New",
        img:`${productimg1}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:40.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:8
    },
    {
        id:6,
        new:"New",
        img:`${productimg2}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:40.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:18
    },
    {
        id:7,
        new:"New",
        img:`${productimg3}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:40.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:13
    },
    {
        id:8,
        new:"New",
        img:`${productimg4}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:40.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:8
    },
    {
        id:9,
        new:"New",
        img:`${productimg1}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:40.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:16
    },
    {id:10,
        new:"New",
        img:`${productimg2}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:40.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:19
    },
    {
        id:11,
        new:"New",
        img:`${productimg3}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:40.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:20
    },
    {
        id:12,
        new:"New",
        img:`${productimg4}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:40.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:10
    },
    {
        id:13,
        new:"New",
        img:`${productimg1}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:40.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:30
    },
    {
        id:14,
        new:"New",
        img:`${productimg2}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:"40.00",
        ripiya1:"50.00",
        button:"Add to cart",
        available:22
    },
    {
        id:15,
        new:"New",
        img:`${productimg3}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:"40.00",
        ripiya1:"50.00",
        button:"Add to cart",
        available:29
    },
    {
        id:16,
        new:"New",
        img:`${productimg4}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:"40.00",
        ripiya1:"50.00",
        button:"Add to cart",
        available:89
    },
    {
        id:17,
        new:"New",
        img:`${productimg1}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:"40.00",
        ripiya1:"50.00",
        button:"Add to cart",
        available:13
    },
    {
        id:18,
        new:"New",
        img:`${productimg2}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:"40.00",
        ripiya1:"50.00",
        button:"Add to cart",
        available:89
    },
    {
        id:19,
        new:"New",
        img:`${productimg3}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:40.00,
        ripiya1:"50.00",
        button:"Add to cart",
        available:57
    },
    {
        id:20,
        new:"New",
        img:`${productimg4}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        price:40,
        ripiya1:"50.00",
        button:"Add to cart",
        available:13
    }
]
export{Sbuycarddata}
///beatdealdata
const bestdealdata2=[
    {
        headertext:"Daily Best sells",
    },

]
export{bestdealdata2}
const bestdealdata=[
    
    {
        img:`${leafimg}`,
        text:"Bring nature into your home",
        button:"Shop Now"
    }       
]
export{bestdealdata}
const cardssdata=[
    {
        new:"New",
        img:`${productimg1}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        rupiyai:<FaDollarSign/>,
        ripiya:"40.00",
        ripiya1:"50.00",
        button:"Add to cart"
    },
    {
        new:"New",
        img:`${productimg2}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        rupiyai:<FaDollarSign/>,
        ripiya:"40.00",
        ripiya1:"50.00",
        button:"Add to cart"
    },
    {
        new:"New",
        img:`${productimg3}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        rupiyai:<FaDollarSign/>,
        ripiya:"40.00",
        ripiya1:"50.00",
        button:"Add to cart"
    },
    {
        new:"New",
        img:`${productimg4}`,
        span:"Snack",
        productname:"seed of change organic quites",
        nest:"Nest Food",
        rupiyai:<FaDollarSign/>,
        ripiya:"40.00",
        ripiya1:"50.00",
        button:"Add to cart"
    }
]
export{cardssdata}
/// deal of data
const dealofdata = [
    {
        heading: "Deal of the Day"
    }
]
export{dealofdata}
const dealofdata1 = [
    {
        img: `${dealimg1}`,
        day: "Days",
        dayn: "1060",
        hour: "Hours",
        hourn: "7",
        min: "Mins",
        minn: "20",
        sec: "Sec",
        secn: "34",
        name: "Seed of change organic ,quinao brown",
        nest: "ByNest Food",
        ripiyai: <FaDollarSign />,
        ripiya1: "50",
        ripiya2: "80",
        buttoni: <AiOutlineShoppingCart />,
        button: "Add"
    },
    {
        img: `${dealimg2}`,
        day: "Days",
        dayn: "1060",
        hour: "Hours",
        hourn: "7",
        min: "Mins",
        minn: "20",
        sec: "Sec",
        secn: "34",
        name: "Seed of change organic ,quinao brown",
        nest: "ByNest Food",
        ripiyai: <FaDollarSign />,
        ripiya1: "50",
        ripiya2: "80",
        buttoni: <AiOutlineShoppingCart />,
        button: "Add"
    },
    {
        img: `${dealimg3}`,
        day: "Days",
        dayn: "1060",
        hour: "Hours",
        hourn: "7",
        min: "Mins",
        minn: "20",
        sec: "Sec",
        secn: "34",
        name: "Seed of change organic ,quinao brown",
        nest: "ByNest Food",
        ripiyai: <FaDollarSign />,
        ripiya1: "50",
        ripiya2: "80",
        buttoni: <AiOutlineShoppingCart />,
        button: "Add"
    },
    {
        img: `${dealimg4}`,
        day: "Days",
        dayn: "1060",
        hour: "Hours",
        hourn: "7",
        min: "Mins",
        minn: "20",
        sec: "Sec",
        secn: "34",
        name: "Seed of change organic ,quinao brown",
        nest: "ByNest Food",
        ripiyai: <FaDollarSign />,
        ripiya1: "50",
        ripiya2: "80",
        buttoni: <AiOutlineShoppingCart />,
        button: "Add"
    },
]
export{dealofdata1}
///footer
const footeradata=[
    {
        img:`${logoimg}`,
        description:"Awesome grocery store website template",
        addressi:<CiLocationOn/>,
        adress:"Adress;",
        address:"5171 W Campbell Ave undefined Kent, United States",
        calli:<AiOutlinePhone/>,
        call:"Call Us;",
        calln:"(+91) - 540-025-124553",
        emaili:<BsFillSendFill/>,
        email:"Email;",
        emaila:"dummysale@Walmart.com",
        houri:<CiAlarmOn/>,
        hour:"Hours",
        hourt:"10:00 - 18:00, Mon - Sat"
    }
]
export{footeradata}

const footerbdata=[
    {
        text:"Company",
    },
    {
        name:"About Us",
        path:"/home"
    },
    {
        name:"Delievry information",
        path:"/home"
    },
    {
        name:"privacy policy",
        path:"/home"
    },
    {
        name:"terms & conditions",
        path:"/home"
    },
    {
        name:"Contact Us",
        path:"/home"
    },
    {
        name:"Helps center",
        path:"/home"
    },
    {
        name:"Carrers",
        path:"/home"
    }
]
export{footerbdata}
//stardata
const stardata=[
    {
        star:<AiFillStar/>,
        star1:<AiFillStar/>,
        star2:<AiFillStar/>,
        star3:<AiFillStar/>,
        star4:<FaStarHalfAlt/>,
    }
]
export{stardata}