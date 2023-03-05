import "./App.css";
import HeaderContact from "./Component/HeaderContact/HeaderContact";
import Home from "./Component/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";
import Search from "./Component/Search/Search";
import NavbarMain from "./Component/Navbar/Navbar";
import ContactPage from "./Component/Contact/ContactPage";
import AboutPage from "./Component/About/AboutPage";
import ApartmentPage from "./Component/Apartments/ApartmentsPage";
import CreatAd from "./Component/CreateAd/CreateAd";
import Navbar_Ar from "./Arabic_RTL/Component/Navbar_Ar/Navbar_Ar";
import HeaderContact_Ar from "./Arabic_RTL/Component/HeaderContact_Ar/HeaderContact_Ar";
import AboutPage_Ar from "./Arabic_RTL/Component/About/AboutPage_Ar";
// import Home_Ar from './Arabic_RTL/Component/Home/Home_Ar';
import Home_Ar from "./Arabic_RTL/Component/Home/Home";

function App() {
  // const handelCounter = (item) => {
  //   if (counter.indexOf(item) !== -1) return;
  //   setCounter([...counter, item]);
  // };
  return (
    <>
      {/* <HeaderContact /> */}
      <HeaderContact_Ar />

      <Routes>
        {/* English Language  اللغة الانجليزية */}
        <Route path="/" element={<NavbarMain />}>
          <Route path="" element={<Home />} />
          <Route path="apartments" element={<ApartmentPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="Contact" element={<ContactPage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="search" element={<Search />} />
          <Route path="createAd" element={<CreatAd />} />
        </Route>

        {/*Arabic Language  اللغة العربية */}
        <Route path="/ar" element={<Navbar_Ar />}>
          <Route path="" element={<Home_Ar />} />
          <Route path="apartments" element={<ApartmentPage />} />
          <Route path="about" element={<AboutPage_Ar />} />
          <Route path="Contact" element={<ContactPage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="search" element={<Search />} />
          <Route path="createAd" element={<CreatAd />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;



  // "homepage": "https://mahmoudSElsebaey.github.io/SakneyGraduationProject",
  //   "gh-pages": "^4.0.0",
  // "scripts": {
  //   "predeploy": "npm run build",
  //   "deploy": "gh-pages -d build",