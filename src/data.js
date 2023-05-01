import {FaAward} from 'react-icons/fa';
import {TbBooks} from 'react-icons/tb';
import {BiHappyHeartEyes} from 'react-icons/bi';

import Carousel_1 from "./assets/carousel-1.jpg";
import Carousel_2 from "./assets/carousel-2.jpg";
import Carousel_3 from "./assets/carousel-3.jpg";

export const navlinks = [
    {
        id: 1,
        title: 'Home',
        path: '/',
    },
    {
        id: 2,
        title: 'About',
        path: '/about',
    },
    {
        id: 3,
        title: 'Gallery',
        path: '/gallery'
    },
    {
        id: 4,
        title: 'My Works',
        path: '/works'
    },
    {
        id: 5,
        title: 'Contact',
        path: '/contact'
    }
]

const dataSlider = [
    {
        id: 1,
        title: "Best Architecture And Interior Design Services",
        desc: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
        img: Carousel_1,
        btn: "Read More"
    },
    {
        id: 2,
        title: "Best Architecture And Interior Design Services",
        desc: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
        img: Carousel_2,
        btn: "Read More"
    },
    {
        id: 3,
        title: "Best Architecture And Interior Design Services",
        desc: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
        img: Carousel_3,
        btn: "Read More"
    }
]

const aboutData = [
    {id: 1, icon: <FaAward />, title: 'Experience', desc: '3+ Years Working'},
    {id: 2, icon: <TbBooks />, title: 'Projects', desc: '100+ Completed'},
    {id: 3, icon: <BiHappyHeartEyes />, title: 'Experience', desc: '30 happy clients'}
]

export  {dataSlider, aboutData};