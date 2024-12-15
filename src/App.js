import {  Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from './Pages/Home/Home'
import Doctors from './Pages/Doctors/Doctors'
import Login from './Pages/Login/Login'
import SignUp from './Pages/Sign Up/SignUp';
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import MyProfile from './Pages/My Profile/MyProfile'
import MyAppointment from './Pages/My Appointment/MyAppointment'
import Appointment from './Pages/Appointmrnt/Appointment'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
      
     <Route path='/' element={<Home/>}/>
<Route path='/doctors' element={<Doctors/>}/>
<Route path='/doctors/:speciality' element={<Doctors/>}/>
<Route path='/login' element={<Login/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/my-profile' element={<MyProfile/>}/>
<Route path='/my-appointment' element={<MyAppointment/>}/>
<Route path='/my-appointment/:docId' element={<Appointment/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
