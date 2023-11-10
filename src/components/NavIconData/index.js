import React from "react";
import { NavLink } from 'react-router-dom'
import './index.css'

const NavIconData = ({ details, updateActId, isActive }) => {
    const { id, IconComponent, linkTo, colorName, IconName } = details
    // const ActiveModule = isActive ? "active-id" : "list-card"

    const activeBtnId = () => {
        updateActId(id)
    }

      
    return (
        <NavLink to={linkTo} style={({ isActive }) => ({backgroundColor: isActive ? "#070834" : "",})} className="Link-card" >
            <button type="button" className='module-btn' onClick={activeBtnId} data-bs-toggle="tooltip" data-bs-placement="right" title={IconName} >
                <IconComponent className='icon-is' color={colorName} />
                {/* <p className='list-name'>{IconName}</p> */}
            </button>
        </NavLink>
    )
}

export default NavIconData