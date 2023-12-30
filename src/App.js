import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  {Sidebar}  from './components/Sidebar/Sidebar';
import Dashboard from "./pages/dashboard/Dashboard"
import MyProjects from './pages/myProjects/MyProjects';
import SampleProjects from './pages/sampleProjects/SampleProjects';
import MyApps from './pages/myApps/MyApps';
import IntroToNecleo from './pages/introToNecleo/IntroToNecleo';
import HelpSupport from './pages/helpSupport/HelpSupport';
import Feedback from './pages/feedback/Feedback';
import CardInfo from './components/CardInfo/CardInfo';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-cyan-50">
        <Navbar/>
          <Routes>
            
            <Route path="/" element={<Dashboard/>} />
            <Route path="/card/:id" element={<CardInfo/>} />
            <Route path="/my-projects" element={<MyProjects/>} />
            <Route path="/sample-projects" element={<SampleProjects/>} />
            <Route path="/my-apps" element={<MyApps/>} />
            <Route path="/intro" element={<IntroToNecleo/>} />
            <Route path="/help-support" element={<HelpSupport/>} />
            <Route path="/feedback" element={<Feedback/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;