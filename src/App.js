// import logo from './logo.svg';
// import './App.css';


import Home from './components/Home/Home'
import About from './components/About/About'
import OnDemadStaffing from './components/OnDemandStaffing/OnDemadStaffing';
import LearningStrategy from './components/Learning Strategy/LearningStrategy';


import {BrowserRouter, Route, Routes} from "react-router-dom"
import LearningSolutions from './components/Learning Solutions/LearningSolutions';
import LearningPlatforms from './components/Learning Platforms/LearningPlatforms';
import IndustrySolutions from './components/Industry Solutions/IndustrySolutions';
import OurCapabilities from './components/OurCapabilities/OurCapabilities';



function App() {
  return (
    <>

<BrowserRouter>
  
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/on-demand-staffing' element = {<OnDemadStaffing/>}/>
        <Route path='/custom-solutions/learning-strategy' element = {<LearningStrategy/>}/>
        <Route path='/custom-solutions/learning-solutions' element = {<LearningSolutions/>}/>
        <Route path='/custom-solutions/learning-platforms' element = {<LearningPlatforms/>}/>
        <Route path='/on-demand-staffing/industry-solutions' element = {<IndustrySolutions/>}/>
        <Route path='/our-capabilities' element = {<OurCapabilities/>}/>

    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
