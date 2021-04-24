import React, { Component } from "react";
import TranslateText from "../../Translate/TranslateText";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

class YesNoQst extends Component {
  render() {
    const {
      qstText,
      name,
      handleInputChange,
      defaultValue,
      maxValue,
      ratingSize,
    } = this.props;

    return (
      // <Row className='w-100'>
      //   <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
      <Box component='fieldset' mb={3} borderColor='transparent'>
        <Typography component='legend'>
          <TranslateText txt={qstText} />
        </Typography>
        <Rating
          name={name}
          className='mt-2'
          defaultValue={defaultValue}
          max={maxValue}
          size={ratingSize}
          required
          onChange={handleInputChange}
        />
      </Box>
      //   </Col>
      // </Row>
    );
  }
}
export default YesNoQst;
