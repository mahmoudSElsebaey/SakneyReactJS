import "./App.css";
import HeaderContact from "./Arabic_RTL/Component/HeaderContact/HeaderContact";
import Home from "./Arabic_RTL/Component/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Arabic_RTL/Component/SignIn/SignIn";
import SignUp from "./Arabic_RTL/Component/SignUp/SignUp";
import Search from "./Arabic_RTL/Component/Search/Search";
import NavbarMain from "./Arabic_RTL/Component/Navbar/Navbar";
import ContactPage from "./Arabic_RTL/Component/Contact/ContactPage";
import AboutPage from "./Arabic_RTL/Component/About/AboutPage";
import ApartmentPage from "./Arabic_RTL/Component/Apartments/ApartmentsPage";

function App2() {
  return (
    <>
      <HeaderContact />
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="apartments" element={<ApartmentPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="Contact" element={<ContactPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="search" element={<Search />} />
        
      </Routes>
    </>
  );
}

export default App2;
