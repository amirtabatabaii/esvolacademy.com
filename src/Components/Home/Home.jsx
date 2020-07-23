import React, { Component } from "react"; // import ReactPageScroller from "react-page-scroller";
import { Animated } from "react-animated-css";

import Section1 from "./Section1";
import Section2 from "./Section2";
import HomeCard from "./HomeCards";
import Footer from "../Footer/Footer";
import NavBar from "./NavBar";

class Home extends Component {
  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          {/* <ReactPageScroller> */}
          <div className='App-header'>
            <NavBar
              bgColor='main-bg-color'
              MenuItem1='MenuItem-Hakkimizda'
              MenuItem2='MenuItem-GirisYap'
              MenuItem3='MenuItem-Iletisim'
              MenuItem4='MenuItem-Esvol'
            />
          </div>

          <div style={{ paddingTop: "130px" }}>
            <Section1 />
          </div>

          <div className='pb-5'>
            <Animated animationIn='zoomIn' animationInDuration={1500}>
              <HomeCard />
            </Animated>
          </div>

          <div className='pb-5'>
            <Section2 />
          </div>

          <Footer />

          {/* </ReactPageScroller> */}
        </div>
      </div>
    );
  }
}

export default Home;
