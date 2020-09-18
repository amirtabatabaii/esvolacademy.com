import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Form, Button } from "react-bootstrap";
import { Select, Radio } from "antd";

function ReadingAddItem(props) {
  const { Option } = Select;

  const [inputList, setInputList] = useState([
    { reading_title: "", reading_url: "", reading_type: "pdf" },
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
      { reading_title: "", reading_url: "", reading_type: "" },
    ]);
  };

  //   handle click event of the Insert button
  const handleSubmit = (event) => {
    event.preventDefault();

    setActiveModule({
      Reading: inputList,
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
                  style={{ width: "38%" }}
                  className='mt-3 ml-1 mr-1'
                  variant='outlined'
                  label={"Reading Title"}
                  name='reading_title'
                  value={x.reading_title}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                  error={false}
                  helperText={"Insert Reading Title"}
                />

                <TextField
                  style={{ width: "38%" }}
                  className='mt-3 ml-1 mr-1'
                  variant='outlined'
                  label={"Reading URL"}
                  name='reading_url'
                  value={x.reading_url}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                  error={false}
                  helperText={"Insert Reading URL"}
                />

                <Radio.Group
                  onChange={(e) => handleInputChange(e, i)}
                  name='reading_type'
                  className='pt-2 m-1'
                  value={x.reading_type !== "" ? x.reading_type : "pdf"}
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

export default ReadingAddItem;
