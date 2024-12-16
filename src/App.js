import {  Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
// import Home from '../src/Pages/Home'
import Doctors from '../src/Pages/Doctors/Doctors.jsx'
import Login from '../src/Pages/Login/Login';
import SignUp from '../src/Pages/Sign Up/SignUp';
import About from '../src/Pages/About/About'
import Contact from '../src/Pages/Contact/Contact'
import MyProfile from '../src/Pages/My Profile/MyProfile'
import MyAppointment from '../src/Pages/My Appointment/MyAppointment'
import Appointment from '../src/Pages/Appointmrnt/Appointment'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home';
// import {Filter} from '../src/Pages/Doctors/Filter.jsx'
function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
     {/* <Routes>
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
     </Routes> */}
<Doctors/>
<Footer/>
{/* <Filter/> */}

    </div>
  );
}

export default App;
