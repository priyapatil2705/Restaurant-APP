import React, { useState } from "react";
import "./Style.css";
import Menu from './MenuApi.js';
import MenuCard from './MenuCard';
import Navbar from "./Navbar";

const uniqueList = [
    ...new Set(
        Menu.map((customElements) => {
            return customElements.category;
        })
    ),
    "All",
]

//console.log("Unique List",uniqueList);

const Restaurant = () => {
    const [MenuData , setMenuData] = useState(Menu);
    const [menulist , setMenulist] = useState(uniqueList);

    const filteritem  = (category) => {
        if(category === "All") {
            setMenuData(Menu);
            return;
        }

        const updateitemlist = Menu.filter((currentElem) => {
            return currentElem.category === category;
        });
        setMenuData(updateitemlist);
    }
    return (
        <>
            <Navbar filteritem={filteritem} menulist={menulist} />
            <MenuCard menuData={MenuData} />
        </>
    )
}

export default Restaurant;