import { useState } from "react";
import { CustomForm, CustomInputFormProps } from "../components/form";
import moment from "moment";
import { taskItems } from "../interfaces/Task";
import { useAppDispatch } from "../redux/hooks";
import { AddTaskFunc } from "../redux/reducers/task";
import Date from "../components/date/Date";

const AddTask: React.FC = () => {
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
      component: () => (
        <Date
          startDate={dueDate}
          handleDateChange={(date) => handleDateChange(date)}
        />
      ),
    },
  ];

  //dispatch
  const dispatch = useAppDispatch();

  //functions

  //handle add task
  const handleAddTask = (val: taskItems) => {
    dispatch(AddTaskFunc({ ...val, dueDate }));
  };

  //handle date change
  const handleDateChange = (date: number) => {
    setDueDate(date);
  };

  return (
    <CustomForm
      formName="form"
      inputs={inputs}
      onSubmit={(vals) => handleAddTask(vals)}
      submitLable={"Add Task"}
    ></CustomForm>
  );
};

export default AddTask;
