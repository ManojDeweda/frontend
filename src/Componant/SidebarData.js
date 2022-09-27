import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as HiIcons from "react-icons/hi";
import { collapseClasses } from '@mui/material';
import { color } from '@mui/system';

export const SidebarData = [
  {
    title: 'Dash Board',
    path: '/admin/',
    icon: <AiIcons.AiFillHome style={{color:"rgba(48, 60, 108, 1)", fontSize: "1.5em"}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Employee',
    path: '/admin/list',
    icon: <IoIcons.IoIosPaper style={{color:"rgba(48, 60, 108, 1) ", fontSize: "1.4em"}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Customers',
    path: '/customer',
    icon: <IoIcons.IoMdPeople style={{color:"rgba(48, 60, 108, 1) ", fontSize: "1.5em"}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Orders',
    path: '/order',
    icon: <FaIcons.FaCartPlus style={{color:"rgba(48, 60, 108, 1) ", fontSize: "1.4em"}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Salary',
    path: '/salary',
    icon: <HiIcons.HiCurrencyRupee style={{color:"rgba(48, 60, 108, 1) ", fontSize: "1.5em"}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Income/Expense',
    path: '/incexp',
    icon: <FaIcons.FaBalanceScale style={{color:"rgba(48, 60, 108, 1) ", fontSize: "1.5em"}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Activity Log',
    path: '/activitylog',
    icon: <IoIcons.IoMdHelpCircle style={{color:"rgba(48, 60, 108, 1) ", fontSize: "1.5em"}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <FaIcons.FaEnvelopeOpenText style={{color:"rgba(48, 60, 108, 1) ", fontSize: "1.25em"}}/>,
    cName: 'nav-text'
  }
  
];
