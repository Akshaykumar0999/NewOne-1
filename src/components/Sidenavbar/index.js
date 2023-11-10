import React, { Component } from 'react';
import NavIconData from '../NavIconData';
import { AiFillHome, AiFillSetting, AiFillQuestionCircle } from 'react-icons/ai';
import { FaHandshake, FaTools, FaFlag, FaPuzzlePiece } from 'react-icons/fa';
import { MdOutlineWbTwilight, MdGroups2, MdOutlineSpeakerNotes } from 'react-icons/md';
import { BsPersonFill, BsFillBellFill } from 'react-icons/bs';
import { RiLuggageCartFill } from 'react-icons/ri';
import './index.css';

const VariousModulesDetailsList = [
    {
        id: 1,
        IconComponent: AiFillHome,
        IconName: "Home",
        linkTo: '/dashboard/home',
        colorName: "#0d99b8"
    },
    {
        id: 2,
        IconComponent: FaHandshake,
        IconName: "Company",
        linkTo: '/dashboard/company',
        colorName: "#3fb57e"
    },
    {
        id: 3,
        IconComponent: RiLuggageCartFill,
        IconName: "Purchase",
        linkTo: '/dashboard/purchase',
        colorName: "#e1c62e"
    },
    {
        id: 4,
        IconComponent: MdOutlineSpeakerNotes,
        IconName: "Products",
        linkTo: '/dashboard/product',
        colorName: "#3ab13e"
    },
    {
        id: 5,
        IconComponent: FaTools,
        IconName: "Orders",
        linkTo: '/dashboard/order',
        colorName: "#93e8f7"
    },
    {
        id: 6,
        IconComponent: FaFlag,
        IconName: "Supplier",
        linkTo: '/dashboard/supplier',
        colorName: "#ed8489"
    },

    {
        id: 7,
        IconComponent: MdOutlineSpeakerNotes,
        IconName: "Category",
        linkTo: '/dashboard/category',
        colorName: "#4ebdd6"
    },
    {
        id: 8,
        IconComponent: MdGroups2,
        IconName: "Sub Categories",
        linkTo: '/dashboard/sub-categories',
        colorName: "#e1c62e"
    },
    {
        id: 9,
        IconComponent: FaPuzzlePiece,
        IconName: "Dummt-1",
        linkTo: '/dummy-1',
        colorName: "#3fb57e"
    },
    {
        id: 10,
        IconComponent: AiFillSetting,
        IconName: "Dummt-2",
        linkTo: '/dummy-2',
        colorName: "#0d99b8"
    },
    {
        id: 11,
        IconComponent: BsPersonFill,
        IconName: "Dummt-3",
        linkTo: '/dummy-3',
        colorName: "#ed8489"
    },
    {
        id: 12,
        IconComponent: BsFillBellFill,
        IconName: "Dummt-4",
        linkTo: '/dummy-4',
        colorName: "#dfee68"
    },
    {
        id: 13,
        IconComponent: AiFillQuestionCircle,
        IconName: "Dummt-5",
        linkTo: '/dummy-5',
        colorName: "#0d99b8"
    }

]

class Sidenavbar extends Component {
  state = {actId: VariousModulesDetailsList[0].id}

  updateActId = (id) => {
    this.setState({actId: id})
  };
  

    render() {
        const {actId} = this.state
        return (
            <div className='navbar-lists-container'>
            <MdOutlineWbTwilight className='logo-icon-is' />
            <ul className='navbar-board-lists'>
                {VariousModulesDetailsList.map(eachItem => (
                <NavIconData
                    key={eachItem.id}
                    details={eachItem}
                    updateActId={this.updateActId}
                    isActive={actId === eachItem.id}
                />
                ))}
            </ul>
            </div>
        );
    }
  
};

export default Sidenavbar;