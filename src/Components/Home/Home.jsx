import React, { Component } from "react";

import Section1 from "./Section1";
import Section2 from "./Section2";
import HomeCard from "./HomeCards";
import NavBar from "./NavBar";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <Container>
            <NavBar />

            <div className='pb-5' style={{ paddingTop: "80px" }}>
              <Section1 />
            </div>

            <div className='pb-5'>
              <HomeCard />
            </div>

            <div className='pb-5'>
              <Section2 />
            </div>
          </Container>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
