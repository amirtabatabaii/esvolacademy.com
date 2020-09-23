import React from "react";
import TextField from "@material-ui/core/TextField";
import ButtonM from "@material-ui/core/Button";
import ExposurePlus1Icon from "@material-ui/icons/ExposurePlus1";
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1";

function NumberInput(props) {
  return (
    <>
      <ButtonM
        variant='contained'
        color='primary'
        size='large'
        className={props.NegClassName}
        onClick={(i) => props.decrementCount(props.i, i)}
        startIcon={<ExposureNeg1Icon />}
        disabled={props.disabled}
      />

      <TextField
        style={{ width: "15%" }}
        className={props.TextFieldClassName}
        variant='outlined'
        label={props.label}
        name={props.name}
        type='number'
        value={props.value}
        disabled
      />

      <ButtonM
        variant='contained'
        color='primary'
        size='large'
        className={props.PlusClassName}
        onClick={(i) => props.incrementCount(props.i, i)}
        startIcon={<ExposurePlus1Icon />}
      />
    </>
  );
}

export default NumberInput;
