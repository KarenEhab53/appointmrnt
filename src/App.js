import { Route, Routes } from "react-router-dom";
import './App.css';

// Main App Components
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Doctors from "./Pages/Doctors/Doctors";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Sign Up/SignUp";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import MyProfile from "./Pages/My Profile/MyProfile";
import MyAppointment from "./Pages/My Appointment/MyAppointment";
import Appointment from "./Pages/Appointmrnt/Appointment";

// Admin Dashboard Components
import NavbarDashboard from "./Pages/Navbar dashboard/Navbar.jsx";
import SideBar from "./dash/SideBar/SideBar.jsx";
import Dashboard from "./dash/Dashboard/Dashboard";
import AddDoctors from "./dash/AddDoctors/AddDoctors";
import AllDoctors from "./dash/All Doctors/AllDoctors";
import Apoin from "./dash/Appointment/Apoin.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main Website Routes */}
        <Route
          path="/*"
          element={
            <>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctors/:speciality" element={<Doctors />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/my-appointment" element={<MyAppointment />} />
                <Route path="/my-appointment/:docId" element={<Appointment />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Admin Dashboard Routes */}
        <Route
          path="/admin/*"
          element={
            <>
              <NavbarDashboard />
              <div className="content">
                <SideBar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="appointment" element={<Apoin />} />
                  <Route path="adddoctor" element={<AddDoctors />} />
                  <Route path="alldoctors" element={<AllDoctors />} />
                </Routes>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
