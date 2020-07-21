import React from "react";
import FooterImg from "../../assets/img/footer.png";
import { Image } from "react-bootstrap";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(25, 66, 124)", color: "white" }}>
      <div className='pt-5'>
        <div className='row w-100'>
          <div className='col-md-3 col-sm-12 m-auto text-center'>
            <Image src={FooterImg} alt='esvol' width='70%' />
          </div>
          <div className='col-md-9 col-sm-12'>
            <div className='col-md-3 col-sm-6 col-6 p-0 float-left mb-3'>
              <h5 className='mb-4 font-weight-bold text-uppercase'>
                Solutions
              </h5>
              <ul className='list-group'>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a href='../sales/sales-performance-market-pipeline.html'>
                    Sales
                  </a>
                </li>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a href='../workforce/workforce-organization-management-hr.html'>
                    Workforce
                  </a>
                </li>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a href='../e-commerce/e-commerce.html'> E-Commerce</a>
                </li>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a href='../finance/finance-accounting-erp.html'>Finance</a>
                </li>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a href='../business-apps/business-apps.html'>
                    Business Apps
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-md-3 col-sm-6 col-6 p-0 mb-3 float-left'>
              <h5 className='mb-4 font-weight-bold text-uppercase'>
                Developers
              </h5>
              <ul className='list-group'>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a href='https://github.com/naologic'>Open Source</a>
                </li>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a href='https://stackshare.io/naologic'>Technology</a>
                </li>
              </ul>
            </div>

            <div className='col-md-3 col-sm-6 col-6 mb-3 p-0 float-left'>
              <h5 className='mb-4 font-weight-bold text-uppercase'>Company</h5>
              <ul className='list-group'>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a href='../about-naologic.html'>About</a>
                </li>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a href='https://blog.naologic.com'> Blog</a>
                </li>
              </ul>
            </div>

            <div className='col-md-3 col-sm-6 col-6 mb-3 p-0 float-left'>
              <h5 className='mb-4 font-weight-bold text-uppercase'>Connect</h5>
              <ul className='list-group'>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a href='https://www.linkedin.com/company/naologic'>
                    <i className='fa fa-linkedin mr-1'></i> LinkedIn
                  </a>
                </li>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a href='https://twitter.com/naologicerp'>
                    <i className='fa fa-twitter mr-1'></i> Twitter
                  </a>
                </li>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a href='https://www.reddit.com/r/naologic/'>
                    <i className='fa fa-reddit mr-1'></i> Reddit
                  </a>
                </li>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a
                    href='https://plus.google.com/109511516185666043480'
                    target='_blank'
                  >
                    <i className='fa fa-google-plus mr-1'></i> Google+
                  </a>
                </li>
                <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
                  <a href='https://github.com/naologic' target='_blank'>
                    <i className='fa fa-github mr-1'></i> Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
