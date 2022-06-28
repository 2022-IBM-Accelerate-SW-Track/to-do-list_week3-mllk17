import React, { Component } from "react";
import "./About.css";
import IBM_Michelle3 from "../assets/IBM_Michelle3.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={IBM_Michelle3}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Michelle Kwan</div>
            <div className="brief_description">
              <p>Hi! I'm Michelle, a rising junior at Washington University in St. Louis. I'm studying Computer Science with a minior in finance. I'm part of the Software Developer Track, and I'm excited to explore more of the CS field. I enjoy traveling, especially to national parks, and going on food adventures.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
