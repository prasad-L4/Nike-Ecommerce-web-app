import header1 from '../../Images/heade1.jpg'
import header2 from '../../Images/header2.jpg'
import header3 from '../../Images/header3.jpg'
import product2 from '../../Images/product2.png'
import product3 from '../../Images/product3.png'
import product4 from '../../Images/product4.png'
import product5 from '../../Images/product5.png'
import product6 from '../../Images/product6.png'
import product7 from '../../Images/product7.png'
import product8 from '../../Images/product8.png'
import product9 from '../../Images/product9.png'
import product10 from '../../Images/product10.png'
import product11 from '../../Images/product11.png'
import product1 from '../../Images/product1.png'
import product12 from '../../Images/product12.png'
import psale1 from '../../Images/nike-air-red.png'
import psale2 from '../../Images/nike-adapt-bb.png'
import psale3 from '../../Images/nike-adapt-bb-smart.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook,FaFacebookMessenger, FaYoutube  } from "react-icons/fa";

const headerimage=[{
    id:1,
    image:header1
},{
    id:2,
    image:header2
},{
    id:3,
    image:header3
}
]
const socialbuttons=[{
    id:1,
    icon:<FaInstagram/>
}
,{
    id:2,
    icon:<FaFacebook/>
},{
    id:3,
    icon:<FaFacebookMessenger/>
},
{
    id:4,
    icon: <FaYoutube />
}
]
const popularsales = 
    [
      {
        id: "0p0x1",
        title: "Nike Addapt BB 2.0",
        text: "MEN Running Shoes",
        rating: "4.9",
        btn: "Buy Now",
        img: psale2,
        price: "250",
        color: "from-blue-600 to-blue-500",
        shadow: "shadow-lg shadow-blue-500",
      },
      {
        id: "0p0x2",
        title: "Nike Martine Rose",
        text: "MEN Running Shoes",
        rating: "4.5",
        btn: "Buy Now",
        img: psale1,
        price: "400",
        color: "from-red-500 to-rose-500",
        shadow: "shadow-lg shadow-rose-500",
      },
      {
        id: "0p0x3",
        title: "Nike Smart Shoe 2.0",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: psale3,
        price: "340",
        color: "from-violet-500 to-indigo-500",
        shadow: "shadow-lg shadow-violet-500",
      },
    ]


  
  const toprateslaes = 
 [
      {
        id: "0M0x1",
        title: "Nike Air Low Premium",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: product7,
        price: "150",
        color: "from-sky-600 to-indigo-600",
        shadow: "shadow-lg shadow-blue-500",
      },
      {
        id: "0M0x2",
        title: "Nike Air Force Green",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: product2,
        price: "150",
        color: "from-green-500 to-emerald-500",
        shadow: "shadow-lg shadow-green-500",
      },
      {
        id: "0M0x3",
        title: "Nike Addapt BB Rose",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: product3,
        price: "150",
        color: "from-red-500 to-rose-500",
        shadow: "shadow-lg shadow-rose-500",
      },
      {
        id: "0M0x4",
        title: "Nike Air Premium",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: product4,
        price: "150",
        color: "from-orange-500 to-amber-500",
        shadow: "shadow-lg shadow-orange-500",
      },
      {
        id: "0M0x5",
        title: "Nike Adapt BB Pro",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: product5,
        price: "150",
        color: "from-gray-900 to-yellow-500",
        shadow: "shadow-lg shadow-yellow-500",
      },
      {
        id: "0M0x6",
        title: "Air Jordan PR3",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: product6,
        price: "150",
        color: "from-blue-500 to-cyan-500",
        shadow: "shadow-lg shadow-cyan-500",
      },
      {
        id: "0M0x7",
        title: "Nike Multi Smart Shoe",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: product1,
        price: "150",
        color: "from-yellow-500 to-yellow-500",
        shadow: "shadow-lg shadow-yellow-500",
      },
      {
        id: "0M0x8",
        title: "Nike Jordan Air Max",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: product9,
        price: "150",
        color: "from-[#936550] to-orange-900",
        shadow: "shadow-lg shadow-orange-800",
      },
      {
        id: "0M0x9",
        title: "Nike Old Max-x",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: product10,
        price: "150",
        color: "from-indigo-700 to-indigo-700",
        shadow: "shadow-lg shadow-indigo-500",
      },
      {
        id: "0M0x10",
        title: "Nike Lime Jordan 11",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: product12,
        price: "150",
        color: "from-green-600 to-lime-500",
        shadow: "shadow-lg shadow-lime-500",
      },
      {
        id: "0M0x11",
        title: "Nike Air Black Max",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: product11,
        price: "150",
        color: "from-slate-900 to-black",
        shadow: "shadow-lg shadow-black",
      },
      {
        id: "0M0x12",
        title: "Nike Zoom Max",
        text: "MEN Running Shoes",
        rating: "5+",
        btn: "Buy Now",
        img: product8,
        price: "150",
        color: "from-blue-900 to-blue-500",
        shadow: "shadow-lg shadow-blue-500",
      },
    ]

  
  
 
export { headerimage,socialbuttons,popularsales,toprateslaes}