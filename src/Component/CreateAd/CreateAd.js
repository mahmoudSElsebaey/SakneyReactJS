import React from "react";
import Footer from './../Footer/Footer';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CreatAd() {
  return (
    <>
     <div className="sign-bg">
        <div className="search-box">
          <h2 className="form-title">Create Ad</h2>

      
          <Button variant="outline-primary" type="search">
            <i className="fas fa-plus"></i> Add
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreatAd;
