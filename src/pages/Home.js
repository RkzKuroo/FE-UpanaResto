import React from "react";
import { BiBowlHot } from "react-icons/bi";
import { MdLocalDrink } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BsClipboard2Check } from "react-icons/bs";
const Home = () => {
    return(
        <div className="container-home">
            <h1>Menu Terlaris Bulan Ini</h1>
        <div className="text-1">ITEM</div>
        <div className="text-2">QTY</div>
        <div className="text-3">Price</div>
        <div className="text-4">Total Price</div>
        <div className="text-5">Nasi Goreng Spesial</div>
        <div className="text-6">Mie Kuah Spesial</div>
        <div className="text-7">x21</div>
        <div className="text-8">x17</div>
        <div className="text-9">Rp.25.000</div>
        <div className="text-10">Rp.23.000</div>
        <div className="text-11">Rp.525.000</div>
        <div className="text-12">Rp.391.000</div>
        
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
        <div className="pict-1">
            <img src="./nasi.png" alt="" />
        </div>
        <div className="pict-2">
            <img src="./mie.png" alt="" />
        </div>
        <div className="ttl-plng">
            <MdGroups/>
            <div className="jmlh-plg">672</div>
            <div className="txt-plg">Total Pelanggan</div>
        </div>
        <div className="ttl-psn">
            <BsClipboard2Check/> 
            <div className="jmlh-psn">876</div>
            <div className="txt-psn">Total Pesanan</div>
        </div>
        </div>
    );
};

export default Home;