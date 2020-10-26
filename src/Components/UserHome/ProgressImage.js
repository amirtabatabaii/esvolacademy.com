import React, { Component } from "react";
import { Image } from "react-bootstrap";
import m1s1 from "../../assets/img/progress_chart/1.png";
import m1s2 from "../../assets/img/progress_chart/2.png";
import m1s3 from "../../assets/img/progress_chart/3.png";
import m1s4 from "../../assets/img/progress_chart/4.png";
import m1s5 from "../../assets/img/progress_chart/5.png";
import m1s6 from "../../assets/img/progress_chart/6.png";
import m1s7 from "../../assets/img/progress_chart/7.png";

import m2s1 from "../../assets/img/progress_chart/8.png";
import m2s2 from "../../assets/img/progress_chart/9.png";
import m2s3 from "../../assets/img/progress_chart/10.png";
import m2s4 from "../../assets/img/progress_chart/11.png";
import m2s5 from "../../assets/img/progress_chart/12.png";
import m2s6 from "../../assets/img/progress_chart/13.png";
import m2s7 from "../../assets/img/progress_chart/14.png";

import m3s1 from "../../assets/img/progress_chart/15.png";
import m3s2 from "../../assets/img/progress_chart/16.png";
import m3s3 from "../../assets/img/progress_chart/17.png";
import m3s4 from "../../assets/img/progress_chart/18.png";
import m3s5 from "../../assets/img/progress_chart/19.png";
import m3s6 from "../../assets/img/progress_chart/20.png";
import m3s7 from "../../assets/img/progress_chart/21.png";

import m4s1 from "../../assets/img/progress_chart/22.png";
import m4s2 from "../../assets/img/progress_chart/23.png";
import m4s3 from "../../assets/img/progress_chart/24.png";
import m4s4 from "../../assets/img/progress_chart/25.png";
import m4s5 from "../../assets/img/progress_chart/26.png";
import m4s6 from "../../assets/img/progress_chart/27.png";
import m4s7 from "../../assets/img/progress_chart/28.png";

import m5s1 from "../../assets/img/progress_chart/29.png";
import m5s2 from "../../assets/img/progress_chart/30.png";
import m5s3 from "../../assets/img/progress_chart/31.png";
import m5s4 from "../../assets/img/progress_chart/32.png";
import m5s5 from "../../assets/img/progress_chart/33.png";
import m5s6 from "../../assets/img/progress_chart/34.png";
import m5s7 from "../../assets/img/progress_chart/35.png";

import module_0 from "../../assets/img/user/module_0.png";
import module_1 from "../../assets/img/user/module_1.png";
import module_2 from "../../assets/img/user/module_2.png";
import module_3 from "../../assets/img/user/module_3.png";
import module_4 from "../../assets/img/user/module_4.png";
import module_5 from "../../assets/img/user/module_5.png";

class ProgressImage extends Component {
  componentDidMount() {}

  render() {
    const { userActiveModule, userActiveSubModule } = this.props;

    return (
      <>
        {userActiveModule === "Module1" && (
          <>
            {userActiveSubModule === "sub1" && (
              <Image src={m1s1} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub2" && (
              <Image src={m1s2} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub3" && (
              <Image src={m1s3} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub4" && (
              <Image src={m1s4} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub5" && (
              <Image src={m1s5} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub6" && (
              <Image src={m1s6} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub7" && (
              <Image src={m1s7} alt='esvol' className='chart-box' />
            )}
            <Image src={module_0} alt='esvol' className='chart-box' />
          </>
        )}

        {userActiveModule === "Module2" && (
          <>
            {userActiveSubModule === "sub1" && (
              <Image src={m2s1} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub2" && (
              <Image src={m2s2} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub3" && (
              <Image src={m2s3} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub4" && (
              <Image src={m2s4} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub5" && (
              <Image src={m2s5} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub6" && (
              <Image src={m2s6} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub7" && (
              <Image src={m2s7} alt='esvol' className='chart-box' />
            )}{" "}
            <Image src={module_1} alt='esvol' className='chart-box' />
          </>
        )}

        {userActiveModule === "Module3" && (
          <>
            {userActiveSubModule === "sub1" && (
              <Image src={m3s1} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub2" && (
              <Image src={m3s2} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub3" && (
              <Image src={m3s3} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub4" && (
              <Image src={m3s4} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub5" && (
              <Image src={m3s5} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub6" && (
              <Image src={m3s6} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub7" && (
              <Image src={m3s7} alt='esvol' className='chart-box' />
            )}{" "}
            <Image src={module_2} alt='esvol' className='chart-box' />
          </>
        )}

        {userActiveModule === "Module4" && (
          <>
            {userActiveSubModule === "sub1" && (
              <Image src={m4s1} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub2" && (
              <Image src={m4s2} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub3" && (
              <Image src={m4s3} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub4" && (
              <Image src={m4s4} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub5" && (
              <Image src={m4s5} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub6" && (
              <Image src={m4s6} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub7" && (
              <Image src={m4s7} alt='esvol' className='chart-box' />
            )}{" "}
            <Image src={module_3} alt='esvol' className='chart-box' />
          </>
        )}

        {userActiveModule === "Module5" && (
          <>
            {userActiveSubModule === "sub1" && (
              <Image src={m5s1} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub2" && (
              <Image src={m5s2} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub3" && (
              <Image src={m5s3} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub4" && (
              <Image src={m5s4} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub5" && (
              <Image src={m5s5} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub6" && (
              <Image src={m5s6} alt='esvol' className='chart-box' />
            )}
            {userActiveSubModule === "sub7" && (
              <Image src={m5s7} alt='esvol' className='chart-box' />
            )}{" "}
            <Image src={module_4} alt='esvol' className='chart-box' />
          </>
        )}
      </>
    );
  }
}

export default ProgressImage;
