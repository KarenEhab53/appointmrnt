import { Route, Routes, useLocation } from "react-router-dom";
import NavBarA from "./Components/NavBar/NavBar";
import NavBarB from "./Components/NavBarB/NavBarB";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import Doctors from "./Pages/Doctors/Doctors";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Sign Up/SignUp";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import MyProfile from "./Pages/My Profile/MyProfile";
import MyAppointment from "./Pages/My Appointment/MyAppointment";
import Appointment from "./Pages/Appointmrnt/Appointment";
import Footer from "./Components/Footer/Footer";
import DashboardAdmin from "./Pages/Dashboard/DashboardAdmin";
import DashboardAppointment from "./Pages/Dashboardappointment/DashboardAppointment";
import DashboardAllDoctors from "./Pages/DashboardAllDoctors/DashboardAllDoctors";
 
import './App.css'
function Layout() {
  const location = useLocation();

  const isDashboard = location.pathname.startsWith("/Dashboard-admin");

  // Determine which Navbar to show
  const NavBar = isDashboard ? NavBarB : NavBarA;

  return (
    <div className="App">
      <NavBar />  

      <div className="contentRoute">
      {isDashboard ? <SideBar /> : null}
        <Routes className="contentRoute">
          <Route path="/Dashboard-admin" element={<DashboardAdmin />} />
          <Route
            path="/Dashboard-admin-Appointment"
            element={<DashboardAppointment />}
          />
          <Route
            path="/Dashboard-admin-AllDoctors"
            element={<DashboardAllDoctors />}
          />
        </Routes>
      </div>

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
      {/* Conditionally render Footer or SideBar */}
      {!isDashboard ? <Footer /> : null}
    </div>
  );
}

function App() {
  return <Layout />;
}

export default App;
