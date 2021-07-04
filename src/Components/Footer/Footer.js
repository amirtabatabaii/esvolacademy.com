import React from "react";
import FooterImg from "../../assets/img/esvol_black.png";
import { Image, Row, Col } from "react-bootstrap";

import "./Footer.css";
import Li from "./Li";
import SectionTitle from "./SectionTitle";
import ReportPdf from "../../assets/pdf/IO_3_Impact_Assessment_Report.pdf";

import {
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColStyle =
  "p-3 float-lg-left text-lg-left float-sm-left text-sm-center float-left text-center m-auto";

function Footer(props) {
  return (
    <footer
      className={`${props.userActiveModule}-footer pb-2`}
      style={{ marginTop: "100px" }}
    >
      <div style={{ marginLeft: "3%", marginRight: "3%" }}>
        <Row className='w-100'>
          <Col lg={2} md={12} sm={12} className='text-center mt-4 p-3'>
            <Image src={FooterImg} alt='esvol' fluid width='150' />
          </Col>

          <Col lg={10} md={12} sm={12} xs={12} className='m-auto'>
            <Col lg={3} md={6} sm={6} xs={12} className={ColStyle}>
              <SectionTitle FooterItemText='Footer-Linkler' />
              <ul className='list-group'>
                <Li
                  href='/our-story'
                  target=''
                  FooterItemText='Footer-Linkler-1'
                />
                <Li
                  href='mailto:esvolproject@gmail.com'
                  target=''
                  FooterItemText='Footer-Linkler-2'
                />
                {/* <Li href='/' target='' FooterItemText='Footer-Linkler-3' /> */}
              </ul>
            </Col>

            <Col lg={3} md={6} sm={6} xs={12} className={ColStyle}>
              <SectionTitle FooterItemText='Footer-Tipler' />
              <ul className='list-group'>
                <Li
                  href='https://www.instagram.com/esvol_project/'
                  target='_blank'
                  FooterItemText='Footer-Tipler-1'
                />
                <Li
                  href='https://trsgd.org/'
                  target='_blank'
                  FooterItemText='Footer-Tipler-2'
                />
                {/* <Li href='/' target='' FooterItemText='Footer-Tipler-3' /> */}
              </ul>
            </Col>

            <Col lg={3} md={6} sm={6} xs={12} className={ColStyle}>
              <SectionTitle FooterItemText='Footer-Kategoriler' />
              <ul className='list-group'>
                <Li
                  href='/intellectual-outputs'
                  target=''
                  FooterItemText='Footer-Kategoriler-1'
                />
                <Li
                  href={ReportPdf}
                  target=''
                  FooterItemText='Footer-Kategoriler-2'
                />
              </ul>
            </Col>

            <Col lg={3} md={6} sm={6} xs={12} className={ColStyle}>
              <SectionTitle FooterItemText='Footer-Iletisim' />
              <ul className='list-group'>
                <Li
                  href='mailto:esvolproject@gmail.com'
                  target=''
                  FooterItemText='Footer-Iletisim-1'
                />
                <Li href='/' target='' FooterItemText='Footer-Iletisim-2' />
                {/* <Li href='/' target='' FooterItemText='Footer-Iletisim-3' /> */}
              </ul>
              <div className=' text-lg-left text-sm-center text-center'>
                <a
                  href='https://www.instagram.com/esvol_project/'
                  target='_blank'
                >
                  <FontAwesomeIcon
                    className='m-2'
                    icon={faInstagram}
                    style={{ color: "#3b3c3c" }}
                    transform='down-5 grow-15'
                    fixedWidth
                  />
                </a>

                <a href='https://twitter.com/EsvolP' target='_blank'>
                  <FontAwesomeIcon
                    className='m-2'
                    icon={faTwitter}
                    style={{ color: "#3b3c3c" }}
                    transform='down-5 grow-15'
                    fixedWidth
                  />
                </a>

                <a
                  href='https://www.youtube.com/channel/UCnpmxkakJCIT_n0s92jkIfw'
                  target='_blank'
                >
                  <FontAwesomeIcon
                    className='m-2'
                    icon={faYoutube}
                    style={{ color: "#3b3c3c" }}
                    transform='down-5 grow-15'
                    fixedWidth
                  />
                </a>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
