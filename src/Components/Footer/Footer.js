import React from "react";
import FooterImg from "../../assets/img/footer.png";
import { Image, Row, Col } from "react-bootstrap";

import "./Footer.css";
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
            <h5 className='mb-2'>Linkler</h5>
            <ul className='list-group'>
              <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                <a>Hakkımızda</a>
              </li>
              <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                <a>Yardım</a>
              </li>
              <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                <a>Site Haritası</a>
              </li>
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className={ColStyle}>
            <h5 className='mb-2'>Tipler</h5>
            <ul className='list-group'>
              <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                <a>Spor Gönüllüsü Olmak</a>
              </li>
              <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                <a>SGD Kimdir?</a>
              </li>
              <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                <a>Esvol Tipleri</a>
              </li>
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className={ColStyle}>
            <h5 className='mb-2'>Kategoriler</h5>
            <ul className='list-group'>
              <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                <a>Modüller ile eğitim</a>
              </li>
              <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                <a>Videolar ile eğitim</a>
              </li>
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className={ColStyle}>
            <h5 className='mb-2'>İletişim</h5>
            <ul className='list-group'>
              <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                <a>info@esvol.com</a>
              </li>
              <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                <a>www.sgd.com</a>
              </li>
              <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                <a>Sosyal Medyalarda Bizi takip edin!</a>
              </li>
            </ul>
          </Col>
        </Col>
      </Row>
    </footer>
  );
}
export default Footer;
