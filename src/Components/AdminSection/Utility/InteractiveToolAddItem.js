import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Form, Button } from "react-bootstrap";
import { Select } from "antd";

function InteractiveToolAddItem(props) {
  const { Option } = Select;

  const [inputList, setInputList] = useState([
    { task_title: "", task_url: "", task_question: "", task_type: "" },
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
      { task_title: "", task_url: "", task_question: "", task_type: "" },
    ]);
  };

  //   handle click event of the Insert button
  const handleSubmit = (event) => {
    event.preventDefault();

    setActiveModule({
      Interactive_tool: inputList,
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
                  label={"Task Title"}
                  name='task_title'
                  value={x.task_title}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                  error={false}
                  helperText={"Insert Task Title"}
                />

                <TextField
                  className='w-25 mt-3 ml-1 mr-1'
                  variant='outlined'
                  label={"Task URL"}
                  name='task_url'
                  value={x.task_url}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                  error={false}
                  helperText={"Insert Task URL"}
                />

                <TextField
                  className='w-25 mt-3 ml-1 mr-1'
                  variant='outlined'
                  label={"Task Question"}
                  name='task_question'
                  value={x.task_question}
                  onChange={(e) => handleInputChange(e, i)}
                  required
                  error={false}
                  helperText={"Insert Task Question"}
                />

                <Select
                  defaultValue='site'
                  //value={x.task_type}
                  name='task_type'
                  onSelect={(e) => handleInputChange(e, i)}
                >
                  <Option value='site'>Site</Option>
                  <Option value='pdf'>PDF</Option>
                </Select>

                {inputList.length !== 1 && (
                  <Button
                    className='mt-3 ml-1 mr-1 p-3 bg-danger'
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </Button>
                )}

                {inputList.length - 1 === i && (
                  <Button
                    className='mt-3 ml-1 mr-1 p-3 bg-success'
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

export default InteractiveToolAddItem;
