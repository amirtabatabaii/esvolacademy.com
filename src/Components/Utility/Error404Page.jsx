import React, { Component } from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

class Error404Page extends Component {
  render() {
    return (
      <div className='bg-white p-5'>
        <Result
          status={this.props.status}
          title={
            <span dangerouslySetInnerHTML={{ __html: this.props.title }} />
          }
          //   subTitle={this.props.subTitle}

          subTitle={
            <span dangerouslySetInnerHTML={{ __html: this.props.subTitle }} />
          }
          extra={
            <Link to='/'>
              <Button type='primary'>Back Home</Button>
            </Link>
          }
        />
      </div>
    );
  }
}

export default Error404Page;
