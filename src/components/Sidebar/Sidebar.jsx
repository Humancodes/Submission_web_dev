import React,{useState} from 'react';
import { Link,useLocation } from 'react-router-dom';
import {Database, LayoutGrid, PlayCircle, Folder, ArrowLeft, MessageSquareWarning,HelpCircle ,ArrowRight} from "lucide-react";
import SideItems from '../SideItems/SideItems';
export const Sidebar = () => {

  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  const isLinkActive = (pathname) => {
    return location.pathname === pathname;
  };
  return (
    
        <div className={`h-screen ${isCollapsed?'w-[65px]':'w-52'}  flex flex-col bg-white border-r shadow-sm justify-between`}>
           <div className=''>
              <div className='p-4 pb-2 flex justify-center items-center '>
              <Link to="/" className='pb-2'>

              {isCollapsed?<img src='logo2.png' alt='logo'className='w-20 text-center'/>
              :<img src='logo.png' alt='logo'className='w-20 text-center'/>
              }</Link>
              </div>
             <div className='border-t border-b border-gray-300 mb-2'>
              <SideItems path='/my-projects' text='My Projects' isCollapsed={isCollapsed} icon={<Database className='mx-2'/>} isLinkActive={isLinkActive}/>
              <SideItems path='/sample-projects' text='Sample Projects' isCollapsed={isCollapsed} icon={<Folder className='mx-2'/>} isLinkActive={isLinkActive}/>
              </div>
              <SideItems path='/my-apps' text='Apps' isCollapsed={isCollapsed} icon={<LayoutGrid className='mx-2'/>} isLinkActive={isLinkActive}/>
              <SideItems path='/intro' text='Intro to Necleo' isCollapsed={isCollapsed} icon={<PlayCircle className='mx-2'/>} isLinkActive={isLinkActive}/>

            </div>

            <div className='pb-4 fixed bottom-0'>
            <SideItems path='/help-support' text='Help & Support' isCollapsed={isCollapsed} icon={<HelpCircle className='mx-2'/>} isLinkActive={isLinkActive}/>
            <SideItems path='/feedback' text='Feedback' isCollapsed={isCollapsed} icon={<MessageSquareWarning className='mx-2'/>} isLinkActive={isLinkActive}/>

              <div className='p-3 '>
              <button onClick={handleCollapse} className=' flex rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow-sm'>
               {isCollapsed?<ArrowRight className=' mx-2'/>: <ArrowLeft className=' mx-2'/>} 
                <span className={`${isCollapsed ? 'hidden':'block'} `}>Collapse</span>
              </button> 
              </div>
            </div>
            
        </div>

  )
}

