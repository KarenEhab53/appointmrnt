import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import About from './Pages/About'
import Contact from './Pages/Contact'
import MyProfile from './Pages/MyProfile'
import MyAppointment from './Pages/MyAppointment'
import Appointment from './Pages/Appointment'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home';
// import {Filter} from '../src/Pages/Doctors/Filter.jsx'
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
