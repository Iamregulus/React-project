import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill} 
    from 'react-icons/bs'
const Sidebar = () => {
  return (
    <aside id = "sidebar">
        <div className = 'sidebar-title'>
            <div className = 'sidebar-brand'> 
                <BsCart3 className = 'icon_header'/> E-commerce  Dashboard
            </div> 
            <span className = 'icon close-icon'>X</span>
        </div>
        <ul className = 'sidebar-list'>
            <li className = 'sidebar-list-item'>
                <a href = "#">
                    <BsGrid1X2Fill className = 'icon'/> Dashboard
                </a>
            </li>
            <li className = 'sidebar-list-item'>
                <a href = "#">
                    <BsFillArchiveFill className = 'icon'/> Category
                </a>
            </li>
            <li className = 'sidebar-list-item'>
                <a href = "#">
                    <BsFillGrid3X3GapFill className = 'icon'/> Sub-category
                </a>
            </li>
            <li className = 'sidebar-list-item'>
                <a href = "#">
                    <BsPeopleFill className = 'icon'/> Customers
                </a>
            </li>
            <li className = 'sidebar-list-item'>
                <a href = "#">
                    <BsListCheck className = 'icon'/> Product Name
                </a>
            </li>
            <li className = 'sidebar-list-item'>
                <a href = "#">
                    <BsMenuButtonWideFill className = 'icon'/> Sales
                </a>
            </li>
            <li className = 'sidebar-list-item'>
                <a href = "#">
                    <BsCart3 className = 'icon'/> Quantity
                </a>
            </li>
            <li className = 'sidebar-list-item'>
                <a href = "#">
                    <BsCart3 className = 'icon'/> Discount
                </a>
            </li>
            <li className = 'sidebar-list-item'>
                <a href = "#">
                    <BsCart3 className = 'icon'/> Profit
                </a>
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar
