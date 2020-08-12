import React from "react";
import FooterImg from "../../assets/img/esvol_black.png";
import { Image, Row, Col } from "react-bootstrap";

import "./Footer.css";
import Li from "./Li";
import SectionTitle from "./SectionTitle";

import {
  faLinkedin,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColStyle = "p-0 float-left text-center mb-sm-2 mt-sm-5 mb-2 mt-5";

function Footer(props) {
  return (
    <footer className={`${props.userActiveModule}-footer pt-5 pb-5`}>
      <Row className='w-100'>
        <Col lg={4} md={12} sm={12} className='text-center m-auto p-4'>
          <Image src={FooterImg} alt='esvol' fluid width='200' />
        </Col>

        <Col lg={8} md={12} sm={12} xs={12}>
          <Col lg={3} md={6} sm={6} xs={12} className={ColStyle}>
            <SectionTitle FooterItemText='Footer-Linkler' />
            <ul className='list-group'>
              <Li href='/' target='' FooterItemText='Footer-Linkler-1' />
              <Li href='/' target='' FooterItemText='Footer-Linkler-2' />
              <Li href='/' target='' FooterItemText='Footer-Linkler-3' />
            </ul>
          </Col>

          <Col lg={3} md={6} sm={6} xs={12} className={ColStyle}>
            <SectionTitle FooterItemText='Footer-Tipler' />
            <ul className='list-group'>
              <Li href='/' target='' FooterItemText='Footer-Tipler-1' />
              <Li href='/' target='' FooterItemText='Footer-Tipler-2' />
              <Li href='/' target='' FooterItemText='Footer-Tipler-3' />
            </ul>
          </Col>

          <Col lg={3} md={6} sm={6} xs={12} className={ColStyle}>
            <SectionTitle FooterItemText='Footer-Kategoriler' />
            <ul className='list-group'>
              <Li href='/' target='' FooterItemText='Footer-Kategoriler-1' />
              <Li href='/' target='' FooterItemText='Footer-Kategoriler-2' />
            </ul>
          </Col>

          <Col lg={3} md={6} sm={6} xs={12} className={ColStyle}>
            <SectionTitle FooterItemText='Footer-Iletisim' />
            <ul className='list-group'>
              <Li href='/' target='' FooterItemText='Footer-Iletisim-1' />
              <Li href='/' target='' FooterItemText='Footer-Iletisim-2' />
              <Li href='/' target='' FooterItemText='Footer-Iletisim-3' />
              <div className='text-center'>
                <FontAwesomeIcon
                  className='m-2'
                  icon={faLinkedin}
                  style={{ color: "#f2f3f7" }}
                  transform='down-5 grow-15'
                  fixedWidth
                />
                <FontAwesomeIcon
                  className='m-2'
                  icon={faInstagram}
                  style={{ color: "#f2f3f7" }}
                  transform='down-5 grow-15'
                  fixedWidth
                />
                <FontAwesomeIcon
                  className='m-2'
                  icon={faFacebookSquare}
                  style={{ color: "#f2f3f7" }}
                  transform='down-5 grow-15'
                  fixedWidth
                />
              </div>
            </ul>
          </Col>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
