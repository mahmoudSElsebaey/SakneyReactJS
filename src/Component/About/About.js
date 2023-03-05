import React from "react";
// import OurTeam from "../OurTeam/OurTeam";
import "./About.css";
import aboutImg1 from "./AboutImages/Students.gif";
import aboutImg2 from "./AboutImages/House searching-cuate.png";

function About() {
  return (
    <>
      <div className="container about-sec ">
        <div className="about-img col-lg-4 col-md-6 col-sm-12">
          <img src={aboutImg1} alt="combo offer" />
        </div>
        <div className="about-website col-lg-7 col-md-6 col-sm-12">
          <h3>Our Website</h3>
          <p>
            Our website is considered one of the most important websites on the
            Internet in the Egypt, because our website always offers the best
            apartments to students before any other website in the Egypt.
          </p>
          <p>
            Our website is also characterized by a variety of apartments and
            prices suitable for all students for all levels , as well as we have all type of
            apartments that you want.
          </p>
        </div>
        <div className="about-howUse col-lg-7 col-md-6 col-sm-12">
          <h3>How to use the website</h3>
          <ul>
            <li>
              <span>1</span> Sign in
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <span>2</span> add your ads or search for apartment
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <span>3</span> send payment requst
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
          <button>Learn More</button>
        </div>
        <div className="about-img col-lg-4 col-md-6 col-sm-12">
          <img src={aboutImg2} alt="Ambassador-pana" />
        </div>
        {/* <div className="ourTeam col-12">
          <p className="title-section">Our Team</p>
           <OurTeam /> 
        </div> */}
      </div>
    </>
  );
}

export default About;
