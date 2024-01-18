import React, { useState } from "react";
import { CustomForm, CustomInputFormProps } from "../form";
import { TextField, Typography } from "@mui/material";
import moment from "moment";
import { enqueueSnackbar } from "notistack";
import { taskItems } from "../interfaces/Task";
import { useAppDispatch } from "../redux/hooks";

const AddTask = () => {
  //states
  const [dueDate, setDueDate] = useState<number>(moment().valueOf());

  //inputs
  const inputs: CustomInputFormProps[] = [
    {
      type: "text",
      name: "title",
      label: "Title",
      placeholder: "Title",
      validate: { required: true },
      autoComplete: "false",
      colProps: { xs: 12 },
    },
    {
      type: "textarea",
      name: "description",
      label: "Description",
      placeholder: "Description",
      validate: { required: true },
      colProps: { xs: 12 },
    },
    {
      type: "text",
      name: "dueDate",
      colProps: { xs: 12 },
      component: (formik: any) => (
        <>
          <Typography>Due Date</Typography>
          <TextField
            type="date"
            name="due-date"
            onChange={handleChangeDueDate}
            value={moment(dueDate).format("YYYY-MM-DD")}
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
      ),
    },
  ];

  //dispatch
  const dispatch = useAppDispatch();

  //functions
  const handleChangeDueDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.valueAsNumber && !!e.target.valueAsNumber) {
      enqueueSnackbar("Something went wrong", {
        variant: "error",
      });
    } else {
      setDueDate(moment(e.target.valueAsNumber).valueOf());
    }
  };

  const handleAddTask = (val: taskItems) => {
    console.log({ ...val, dueDate });
  };

  return (
    <>
      <CustomForm
        formName="form"
        inputs={inputs}
        onSubmit={(vals) => handleAddTask(vals)}
        submitLable={"Add Task"}
      ></CustomForm>
    </>
  );
};

export default AddTask;
