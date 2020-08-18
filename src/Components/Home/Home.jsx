import React, { Component } from "react";

import Section1 from "./Section1";
import Section2 from "./Section2";
import HomeCard from "./HomeCards";
import HomeNavBar from "./HomeNavBar";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <HomeNavBar />
          <div style={{ marginLeft: "5%", marginRight: "5%" }}>
            <div className='pb-5'>
              {/* style={{ paddingTop: "80px" }}> */}
              <Section1 />
            </div>

            <div className='pb-5'>
              <HomeCard />
            </div>

            <div className='pb-5 pt-5'>
              <Section2 />
            </div>
          </div>

          <Footer userActiveModule={"Main"} />
        </div>
      </div>
    );
  }
}

export default Home;
