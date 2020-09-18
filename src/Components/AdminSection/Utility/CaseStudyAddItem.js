import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Form, Button } from "react-bootstrap";
import { Select, Radio } from "antd";

function CaseStudyAddItem(props) {
  const { Option } = Select;

  const [inputList, setInputList] = useState([
    {
      caseStudy_title1: "",
      caseStudy_title2: "",
      caseStudy_url: "",
      caseStudy_type: "pdf",
    },
  ]);

  const [ActiveModule, setActiveModule] = useState({
    adminActiveSubModule: "",
    adminActiveModule: "",
    language: "en",
  });

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        caseStudy_title1: "",
        caseStudy_title2: "",
        caseStudy_url: "",
        caseStudy_type: "",
      },
    ]);
  };

  //   handle click event of the Insert button
  const handleSubmit = (event) => {
    event.preventDefault();

    setActiveModule({
      Case_Study: inputList,
      active_subModule: props.adminActiveSubModule,
      active_Module: props.adminActiveModule,
      language: ActiveModule.language,
    });
  };

  const handleChange = (value) => {
    setActiveModule({
      ...ActiveModule,
      language: value,
    });
  };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  return (
    <div>
      <Form className='text-left' onSubmit={handleSubmit}>
        <div className='m-auto'>
          <Select defaultValue='En' onChange={handleChange}>
            <Option className='p-3' value='en'>
              En
            </Option>
            <Option className='p-3' value='tr'>
              Tr
            </Option>
          </Select>

          {inputList.map((x, i) => {
            return (
              <div className='ml-3 pl-4'>
                <TextField
                  className='w-25 mt-3 ml-1 mr-1'
                  variant='outlined'
                  label={"Case Study Title 1"}
                  name='caseStudy_title1'
                  value={x.caseStudy_title1}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                  error={false}
                  helperText={"Insert Case Study Title 1"}
                />

                <TextField
                  className='w-25 mt-3 ml-1 mr-1'
                  variant='outlined'
                  label={"Case Study Title 2"}
                  name='caseStudy_title2'
                  value={x.caseStudy_title2}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                  error={false}
                  helperText={"Insert Case Study Title 2"}
                />

                <TextField
                  className='w-25 mt-3 ml-1 mr-1'
                  variant='outlined'
                  label={"Case Study URL"}
                  name='caseStudy_url'
                  value={x.caseStudy_url}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                  error={false}
                  helperText={"Insert Case Study URL"}
                />

                <Radio.Group
                  onChange={(e) => handleInputChange(e, i)}
                  name='caseStudy_type'
                  className='pt-2 m-1'
                  value={x.caseStudy_type !== "" ? x.caseStudy_type : "pdf"}
                >
                  <Radio style={radioStyle} value={"pdf"}>
                    PDF
                  </Radio>
                  <Radio style={radioStyle} value={"site"}>
                    Site
                  </Radio>
                </Radio.Group>

                {inputList.length !== 1 && (
                  <Button
                    // mt-3 ml-1 mr-1 p-3
                    className='mr-1 p-3 bg-danger'
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </Button>
                )}

                {inputList.length - 1 === i && (
                  <Button
                    className='mr-1 p-3 bg-success'
                    onClick={handleAddClick}
                  >
                    Add
                  </Button>
                )}

                <br />
              </div>
            );
          })}
        </div>

        <div className='m-5'>
          <Button type='submit' className='p-3 w-100'>
            Insert
          </Button>
        </div>
      </Form>

      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
      <div style={{ marginTop: 20 }}>{JSON.stringify(ActiveModule)}</div>
    </div>
  );
}

export default CaseStudyAddItem;
