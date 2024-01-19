import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import moment from "moment";
import { enqueueSnackbar } from "notistack";

interface dateProps {
  startDate: number;
  handleDateChange: (date: number) => void;
}

const Date: React.FC<dateProps> = ({ startDate, handleDateChange }) => {
  //functions
  const handleChangeDueDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.valueAsNumber && !!e.target.valueAsNumber) {
      enqueueSnackbar("Something went wrong", {
        variant: "error",
      });
    } else {
      handleDateChange &&
        handleDateChange(moment(e.target.valueAsNumber).valueOf());
    }
  };
  return (
    <>
      <Typography>Due Date</Typography>
      <TextField
        type="date"
        name="due-date"
        onChange={handleChangeDueDate}
        value={moment(startDate).format("YYYY-MM-DD")}
        InputProps={{
          sx: {
            bgcolor: "background.default",
            ".MuiInputBase-input": {
              borderTopRightRadius: "0px !important",
              borderBottomRightRadius: "0px !important",
            },
          },
        }}
      />
    </>
  );
};

export default Date;
