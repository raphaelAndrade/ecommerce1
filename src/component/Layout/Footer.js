//This component is for the homepage of our website
import React, { useState, useEffect } from "react";
import "./Layout.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";



const Footer = () => {
  return (
    <>
    <footer>
      <div className="mainFooter">
        <div className="box1">
          <h3>Logo</h3>
          <p>Company adress</p>
        </div>
        <div className="box2">
          <h4>Yuki</h4>
          <ul>
          <li><a href="#"><FaGithubSquare/></a></li>
          <li><a href="#"><FaFacebookSquare/></a></li>
          <li><a href="#"><FaSlack/></a></li>
          </ul>
        </div>
        <div className="box3">
          <h4>Daniel</h4>
          <ul>
          <li><a href="#"><FaGithubSquare/></a></li>
          <li><a href="#"><FaFacebookSquare/></a></li>
          <li><a href="#"><FaSlack/></a></li>
          </ul>
        </div>
        <div className="box4">
          <h4>Sae</h4>
          <ul>
          <li><a href="#"><FaGithubSquare/></a></li>
          <li><a href="#"><FaFacebookSquare/></a></li>
          <li><a href="#"><FaSlack/></a></li>
          </ul>
        </div>
      </div>
        <div className="rowFooter">
        <p>©2021 Sae Yuki Daniel.</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;