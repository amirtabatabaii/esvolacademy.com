import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TranslateText from "../../Translate/TranslateText";

class YesNoQst extends Component {
  render() {
    const { qstText, name, handleInputChange } = this.props;

    return (
      // <Row className='w-100'>
      //   <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
      <FormControl variant='outlined' required className='w-100'>
        <InputLabel id={name}>
          <TranslateText txt={qstText} />
        </InputLabel>
        <Select
          labelId={name}
          onChange={handleInputChange}
          name={name}
          label={<TranslateText txt={qstText} />}
        >
          <MenuItem disabled>
            <TranslateText txt={qstText} />
          </MenuItem>
          <MenuItem value='yes'>
            <TranslateText txt='PreTestQst-Yes' />
          </MenuItem>
          <MenuItem value='no'>
            <TranslateText txt='PreTestQst-No' />
          </MenuItem>
        </Select>
      </FormControl>
      //   </Col>
      // </Row>
    );
  }
}
export default YesNoQst;
