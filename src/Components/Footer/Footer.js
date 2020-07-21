import React from "react";
import FooterImg from "../../assets/img/footer.png";
import { Image, Row, Col } from "react-bootstrap";

import "./Footer.css";
import FooterItem from "../Translate/Footer/FooterItem";
import Li from "./Li";
import SectionTitle from "./SectionTitle";

const ColStyle = "p-0 float-left text-center mb-sm-2 mt-sm-5 mb-2 mt-5";

function Footer() {
  return (
    <footer className='pt-5 pb-5'>
      <Row className='row w-100'>
        <Col md={3} sm={12} className='text-center m-auto'>
          <Image src={FooterImg} alt='esvol' fluid />
        </Col>

        <Col md={9} sm={12} xs={12}>
          <Col md={3} sm={6} xs={12} className={ColStyle}>
            <SectionTitle FooterItemText='Footer-Linkler' />
            <ul className='list-group'>
              <Li FooterItemText='Footer-Linkler-1' />
              <Li FooterItemText='Footer-Linkler-2' />
              <Li FooterItemText='Footer-Linkler-3' />
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className={ColStyle}>
            <SectionTitle FooterItemText='Footer-Tipler' />
            <ul className='list-group'>
              <Li FooterItemText='Footer-Tipler-1' />
              <Li FooterItemText='Footer-Tipler-2' />
              <Li FooterItemText='Footer-Tipler-3' />
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className={ColStyle}>
            <SectionTitle FooterItemText='Footer-Kategoriler' />
            <ul className='list-group'>
              <Li FooterItemText='Footer-Kategoriler-1' />
              <Li FooterItemText='Footer-Kategoriler-2' />
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className={ColStyle}>
            <SectionTitle FooterItemText='Footer-Iletisim' />
            <ul className='list-group'>
              <Li FooterItemText='info@esvol.com' />
              <Li FooterItemText='www.sgd.com' />
              <Li FooterItemText='Footer-Iletisim-1' />
            </ul>
          </Col>
        </Col>
      </Row>
    </footer>
  );
}
export default Footer;
