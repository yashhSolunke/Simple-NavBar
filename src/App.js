import React from 'react';
import A from './Components/A'
import B from './Components/B'
import NavBar from './Components/NavBar';
import ContactUs from "./Components/Pages/ContactUs";
import Help from "./Components/Pages/Help";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/About";
import Login from './Components/Pages/Login';
import Meeting from './Components/Pages/Meeting';
import CompA from './Components/StateLifting/CompA';
import CompB from './Components/StateLifting/CompB';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  let age=17;
  
  return (
    <div>
     
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/'element=<Home/> />
         <Route path='/about'element=<AboutUs/> />
          <Route path='/contact'element=<ContactUs/> />
           <Route path='/help'element=<Help/> />
           <Route path='/login'element=<Login/> />
           <Route path='/meeting/:meetid'element={<Meeting/>} />
           <Route path='/StateLifting'element={<CompA/>}/>
           <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
{/* <NavBar/>
<Home/>
<AboutUs/>
<ContactUs/>
<Help/> */}

{/* {
  age>=18 ? <A/>:<B/>

} */}