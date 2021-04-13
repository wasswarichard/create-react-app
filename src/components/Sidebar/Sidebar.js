import React, {useState} from 'react';
// import "./Sidebar.css"
import "./style.css"
import {sidebarData} from "./sidebarData";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-brand">
                <h2><span className="lab la-accusoft"></span> <span>Accusoft</span></h2>
            </div>
            <div className="sidebar-menu">
                <ul>
                    {sidebarData.map((val, key) => {
                        return (
                            <li key={key} onClick={()=> {window.location.pathname = val.link}}>
                                <a href=""><span className={val.iconClass}></span><span>{val.title}</span></a>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>

        // <div className="sidebar">
        //     <ul>
        //         {sidebarData.map((val, key) => {
        //             return (
        //                 <li key={key} onClick={()=> {window.location.pathname = val.link}}>
        //                     <a href=""><span className={val.iconClass}></span><span>{val.title}</span></a>
        //                 </li>
        //                 // <li key={key} onClick={()=> {window.location.pathname = val.link}}>
        //                 //     {" "}
        //                 //     <div>{val.iconClass}</div> {" "}
        //                 //     <div> {val.title}</div>
        //                 // </li>
        //             )
        //         })
        //         }
        //     </ul>
        // </div>
    )
}
export default Sidebar;
