import React from 'react';
import { Link,useLocation } from 'react-router-dom';

const SideItems = ({path,text,isCollapsed,icon}) => {
    const location = useLocation();
    
    const isLinkActive = (pathname) => {
      return location.pathname === pathname;
    };
  return (
    <Link to={path} className={`flex p-3 my-1 text-gray-400 hover:text-orange-600 hover:cursor-pointer ${isLinkActive(path) && 'text-orange-600'} `}>{icon} <span className={`${isCollapsed ? 'hidden':'block'} `}>{text}</span></Link>
  )
}

export default SideItems;