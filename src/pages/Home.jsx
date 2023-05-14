import React from "react";
import { BiBowlHot } from "react-icons/bi";
import { MdLocalDrink } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
const Home = () => {
    return(
        <div className="container-home">
            <h1>Menu Terlaris Bulan Ini</h1>
        <div className="menu-1">
             <BiBowlHot/> 
        </div>
        <div className="menu-2">
             <MdLocalDrink/>
        </div>
        <div className="menu-3">
            <GiHamburger/>
        </div>
        <div className="menu-4">
            <FaIceCream/>
        </div>
        <div className="pict-1"></div>
        <div className="pict-2"></div>
        <div className="ttl-plng"></div>
        <div className="ttl-psn"></div>
        </div>
    );
};

export default Home;