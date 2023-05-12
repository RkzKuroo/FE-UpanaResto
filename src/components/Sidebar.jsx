import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/",
            name:"Home",
        },
        {
            path:"/post",
            name:"Post",
        }
    ]
    return(
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <h1 className="logo">UpanaResto</h1>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="link_text">{item.name}</div>
                        </NavLink>

                    ))
                }
            </div>
                <main>{children}</main>
            
        </div>
    );
};

export default Sidebar;