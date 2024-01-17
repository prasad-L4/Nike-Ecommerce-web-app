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
export { headerimage,socialbuttons}