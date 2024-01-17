import header1 from '../../Images/heade1.jpg'
import header2 from '../../Images/header2.jpg'
import header3 from '../../Images/header3.jpg'
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
const popularsales = {
    title: "Popular Sales",
    items: [
      {
        id: "0p0x1",
        title: "Nike Addapt BB 2.0",
        text: "MEN Running Shoes",
        rating: "4.9",
        btn: "Buy Now",
        img: psale2,
        price: "200",
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
        price: "200",
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
        price: "200",
        color: "from-violet-500 to-indigo-500",
        shadow: "shadow-lg shadow-violet-500",
      },
    ],
  };
  const highlight = {
    heading: "HIGHLIGHTS",
    title: "NIKE AIR WITH LIMITLESS CHOICES",
    text: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.",
    btn: "Explore More",
    url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
    img: hightlightimg,
  };
  
  const sneaker = {
    heading: "FEATURED",
    title: "NIKE SNEAKERS AIR LANCING SHOES",
    text: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    btn: "Explore More",
    url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
    img: sneakershoe,
  };
  
  const toprateslaes = {
    title: "Top Rated Sales",
    items: [
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
    ],
  };
  
  
 
export { headerimage,socialbuttons,popularsales}