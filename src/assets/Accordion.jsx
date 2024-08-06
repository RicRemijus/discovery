import {HiShieldCheck, HiOutlineMail} from 'react-icons/hi';
import {MdWallet, MdAnalytics, MdCall, MdHandshake} from 'react-icons/md';
import {BsWhatsapp, BsPersonVideo3} from 'react-icons/bs';


export const dropDownData = [
    {   
        id:1,
        icon:<HiShieldCheck/>,
        heading:"Dedicated Team",
        detail:"Enjoy a hassle-free real estate experience with our comprehensive support, dedicated team and expert guidance committed to making your property dreams a reality",
    },
    {
        id:2,
        icon:<MdAnalytics/>,
        heading:"Exclusive Opportunities",
        detail:'Unlock the exclusive opportunities in the market with our extensive network and innovative approach to buying and selling homes.'
    },
    {
        id:2,
        icon:<MdWallet/>,
        heading:"Best Prices In The Market",
        detail:"Benefit from our in-depth market knowledge and personalized service, ensuring you find the ideal property with ease.",
    },
    {
        id:3,
        icon:<MdHandshake/>,
        heading:"Unmatched Partnership",
        detail:"Partner with our unmatched expertise and a tailored approach to finding or selling your home, ensuring exceptional results.",
    },

];



export const contactData = [
    {
        id: 1,
        contactIcon: <MdCall/>,
        title: "Voice Call",
        mobile: "08012345679",
        action: 'Voice Call Now'
    },
    {
        id: 2,
        contactIcon: <BsWhatsapp/>,
        title: "WhatsApp",
        mobile: "08012345678",
        action: "WhatsApp Now",
    },
    {
        id: 3,
        contactIcon: <BsPersonVideo3/>,
        title: "Video Call",
        mobile: "08012345679",
        action: "Video Call Now"
    },
    {
        id: 4,
        contactIcon: <HiOutlineMail/>,
        title: "Email",
        mobile: "admin@discovery.com",
        action: "Message Now"
    },
];
