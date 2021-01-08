import React, { useState } from "react";
import { Drawer } from "antd";
import { Form } from "react-bootstrap";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { LanguageList } from "../../Utility/AdminUtility";
import { openNotificationWithIcon } from "../../Utility/Error";

function DrawerReading(props) {
  const {
    title,
    width,
    onClose,
    visible,
    placement,
    DrawerType,
    FltReadingList,
  } = props;

  const [OldInputList, setOldInputList] = useState(
    FltReadingList.subLevelTranslations
  );

  const [inputList, setInputList] = useState([]);

  const [ActiveModule, setActiveModule] = useState({
    subModuleType: FltReadingList.subModuleType,
    moduleName: FltReadingList.moduleName,
    taskUrl: FltReadingList.taskUrl,
    urlFormat: FltReadingList.urlFormat,
  });

  const handleOldInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...OldInputList];
    list[index][name] = value;
    setOldInputList(list);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];

    if (name === "language") {
      const tmpList = [...OldInputList, ...inputList];
      if (tmpList.find((p) => p.language === value)) {
        openNotificationWithIcon(
          "error",
          " exists  > 1 ",
          " exists  >>> 111",
          5
        );
      } else {
        list[index][name] = value;
        setInputList(list);
      }
    } else {
      list[index][name] = value;
      setInputList(list);
    }
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        interactiveQuestion: "",
        language: "",
        title: "",
      },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setActiveModule({
      subModuleType: FltReadingList.subModuleType,
      moduleName: FltReadingList.moduleName,
      taskUrl: ActiveModule.taskUrl,
      urlFormat: ActiveModule.urlFormat,
      subLevelTranslations: [...OldInputList, ...inputList],
    });
  };

  const handleChangeReading = (e) => {
    if (e.target.name === "taskUrl")
      setActiveModule({
        ...ActiveModule,
        taskUrl: e.target.value,
      });

    if (e.target.name === "urlFormat")
      setActiveModule({
        ...ActiveModule,
        urlFormat: e.target.value,
      });
  };

  return (
    <div>
      <Drawer
        // title={<LanguageSelector />}
        title={title}
        width={width}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        placement={placement}
        footer={
          <div
            style={{
              textAlign: "center",
            }}
          >
            <button onClick={onClose}>
              {"Close " + DrawerType + " Section"}
            </button>
          </div>
        }
      >
        <Form id='InsertForm' className='text-left' onSubmit={handleSubmit}>
          {
            <div className='m-auto'>
              <TextField
                className='m-2 w-75'
                variant='outlined'
                label={"Task Url"}
                name='taskUrl'
                defaultValue={
                  FltReadingList.taskUrl !== " "
                    ? FltReadingList.taskUrl
                    : "No Link"
                }
                required
                disabled={DrawerType === "View" ? true : false}
                onChange={(e) => handleChangeReading(e)}
              />

              <FormControl
                variant='outlined'
                style={{ width: "15%" }}
                className='mt-2 ml-1 mr-1'
              >
                <InputLabel id='demo-simple-select-outlined-label'>
                  URL Format
                </InputLabel>
                <Select
                  labelId='demo-simple-select-outlined-label'
                  defaultValue={FltReadingList.urlFormat}
                  onChange={(e) => handleChangeReading(e)}
                  label='URL Format'
                  name='urlFormat'
                  disabled={DrawerType === "View" ? true : false}
                  required
                >
                  <MenuItem value={"pdf"}>PDF</MenuItem>
                  <MenuItem value={"site"}>Website</MenuItem>
                  <MenuItem value={"video"}>Video</MenuItem>
                </Select>
              </FormControl>

              <div>
                {OldInputList.map((qst, index) => (
                  <div className='border border-success p-2 mt-2'>
                    <TextField
                      className='m-2 w-75'
                      variant='outlined'
                      label={"Reading Title"}
                      name='title'
                      // multiline
                      // rowsMax={5}
                      defaultValue={qst.title}
                      required
                      disabled={DrawerType === "View" ? true : false}
                      onChange={(e) => handleOldInputChange(e, index)}
                    />
                    {/*  */}
                    <FormControl
                      variant='outlined'
                      style={{ width: "11%" }}
                      className='mt-2 ml-1 mr-1'
                    >
                      <InputLabel id='forLanguages'>Language</InputLabel>
                      <Select
                        className='bg-light text-danger font-weight-bold'
                        labelId='forLanguages'
                        defaultValue={qst.language}
                        label='Language'
                        name='language'
                        required
                        error={false}
                        helperText={"Select Language"}
                        disabled={true}
                        onChange={(e) => handleOldInputChange(e, index)}
                      >
                        {LanguageList.map((lng, i) => {
                          return (
                            <MenuItem key={i} value={lng}>
                              {lng}
                            </MenuItem>
                          );
                        })}
                        {/* <MenuItem value={"En"}>En</MenuItem>
                        <MenuItem value={"Tr"}>Tr</MenuItem> */}
                      </Select>
                    </FormControl>
                    {/*  */}

                    {inputList.length === index && (
                      <Button
                        variant='contained'
                        color='secondary'
                        className='m-2 p-3 bg-success'
                        onClick={handleAddClick}
                        startIcon={<AddBoxIcon />}
                        disabled={DrawerType === "View" ? true : false}
                      >
                        Add
                      </Button>
                    )}
                  </div>
                ))}

                {inputList.map((qst, index) => (
                  <div className='border border-danger p-2 mt-2'>
                    <TextField
                      className='m-2 w-75'
                      variant='outlined'
                      label={"Reading Title"}
                      name='title'
                      // multiline
                      // rowsMax={5}
                      value={qst.title}
                      required
                      disabled={DrawerType === "View" ? true : false}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                    {/*  */}
                    <FormControl
                      variant='outlined'
                      style={{ width: "11%" }}
                      className='mt-2 ml-1 mr-1'
                    >
                      <InputLabel id='forLanguages'>Language</InputLabel>
                      <Select
                        className='bg-light text-danger font-weight-bold'
                        labelId='forLanguages'
                        value={qst.language}
                        label='Language'
                        name='language'
                        required
                        error={false}
                        helperText={"Select Language"}
                        disabled={DrawerType === "View" ? true : false}
                        onChange={(e) => handleInputChange(e, index)}
                      >
                        {LanguageList.map((lng, i) => {
                          return (
                            <MenuItem key={i} value={lng}>
                              {lng}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                    {/*  */}
                    {inputList.length !== 0 && (
                      <Button
                        variant='contained'
                        color='secondary'
                        className='m-1 p-3 bg-danger'
                        onClick={() => handleRemoveClick(index)}
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    )}

                    {inputList.length - 1 === index && (
                      <Button
                        variant='contained'
                        color='secondary'
                        className='p-3 bg-success'
                        onClick={handleAddClick}
                        startIcon={<AddBoxIcon />}
                      >
                        Add
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          }

          <div className='m-5'>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              className='p-3 w-100'
              size='large'
              startIcon={<SaveIcon />}
              disabled={DrawerType === "View" ? true : false}
            >
              Save Interactive Task
            </Button>
          </div>
        </Form>

        <div style={{ marginTop: 20 }}>
          {/* <pre>{JSON.stringify(inputList, null, 2)}</pre>
          <pre>{JSON.stringify(OldInputList, null, 2)}</pre> */}
          <pre>{JSON.stringify(ActiveModule, null, 2)}</pre>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerReading;
