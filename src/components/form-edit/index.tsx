import { SvgIcon } from "@mui/material";
import { FC, useState } from "react";
import { useToggle } from "usehooks-ts";
import { CustomModal } from "../custom-modal/CustomModal";
import { LoadingBox } from "../loading-box";
import EditIcon from "@mui/icons-material/Edit";
import { CustomForm, CustomInputFormProps } from "../form";
import Date from "../date/Date";
import { useAppDispatch } from "../../redux/hooks";
import { UpdateTaskFunc } from "../../redux/reducers/task";
import { taskItems } from "../../interfaces/Task";

export interface EditFormProps {
  onClick?: Function;
  isLoading?: boolean;
  data: { id: string; title: string; description: string; dueDate: number };
}

export const EditForm: FC<EditFormProps> = ({ onClick, isLoading, data }) => {
  //states
  const [dueDate, setDueDate] = useState<number>(data.dueDate);

  //toggle
  const [open, toggle] = useToggle();

  //dispatch
  const dispatch = useAppDispatch();

  //inputs
  const inputs: CustomInputFormProps[] = [
    {
      type: "text",
      name: "id",
      label: "ID",
      placeholder: "Title",
      validate: { required: true },
      autoComplete: "false",
      colProps: { xs: 12 },
      disabled: true,
    },
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

  //functions

  //handle date change
  const handleDateChange = (date: number) => {
    setDueDate(date);
  };

  const handleClick = () => {
    toggle();
    onClick && onClick();
  };

  //handle add task
  const handleUpdateTask = (vals: taskItems) => {
    dispatch(UpdateTaskFunc({ ...vals, dueDate }));
    handleClick();
  };

  return (
    <>
      <CustomModal open={open} onClose={toggle}>
        <LoadingBox status={isLoading ? "loading" : "data"}>
          <CustomForm
            formName="form"
            initialInputValues={{ ...data }}
            inputs={inputs}
            resetFrom
            onSubmit={(vals) => handleUpdateTask(vals)}
            submitLable={"Upadate"}
          ></CustomForm>
        </LoadingBox>
      </CustomModal>
      <SvgIcon
        sx={{ color: "primary.main", cursor: "pointer" }}
        component={EditIcon}
        onClick={handleClick}
      />
    </>
  );
};
