import { Link } from "react-router-dom";
import "./HeaderContact.css";
import { useState } from "react";

function HeaderContact_Ar() {
  const [headerDir, setHeaderDir] = useState("LRT");
  const cityLang = document.querySelector("#cityLang");
  function BtnEN() {
    cityLang.textContent = "Egypt";
    setHeaderDir("LTR");
  }
  function BtnAR() {
    cityLang.textContent = "مصر";
    setHeaderDir("RTL");
  }
  return (
    <>
      <div className="header-contact-parent" dir={headerDir}>
        <div className="container header-contact">
          <div className="header-weather-lang">
            <span>
              <i className="fas fa-cloud-sun"></i> 24<sup>c</sup>
              <span id="cityLang">Egypt</span>
            </span>
            <span>|</span>
            <span>
              <span>
                <i className="far fa-clock"></i> Aug 08,2022
              </span>
            </span>
            <span>|</span>
            <span className="languages-btns">
              <i className="fas fa-globe-americas"></i>
              {"  "}
              <Link to="" onClick={BtnEN}>
                English
              </Link>
              {"  "}/{"  "}
              <Link to="ar" onClick={BtnAR}>
                عربي
              </Link>
            </span>
          </div>
          <div className="social-conatct-icons ">
            <a href="https://facebook.com" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://whatsapp.com" target="_blank">
              <i className="fab fa-whatsapp"></i>
            </a>
            {/* <a href="https://youtube.com" target="_blank">
              <i className="fab fa-youtube"></i>
            </a> */}
            {/* <a href="https://google.com" target="_blank">
              <i className="fab fa-google"></i>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderContact_Ar;
