import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { RequestStatus } from "../../interfaces";
import { enqueueSnackbar } from "notistack";
import { taskItems as TaskItems } from "../../interfaces/Task";
import { v4 as uuidv4 } from "uuid";

interface InitialState {
  status: RequestStatus;
  taskItems: TaskItems[];
}

const initialState: InitialState = {
  status: "nothing",
  taskItems: [],
};

const TaskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    setStatus: (state, { payload }: PayloadAction<RequestStatus>) => {
      state.status = payload;
    },
    AddTask: (state, { payload }: PayloadAction<TaskItems>) => {
      const existingIndex = state.taskItems.findIndex(
        (task) => task.title === payload.title
      );

      if (existingIndex !== -1) {
        enqueueSnackbar(`Task with Title ${payload.title} already exist`, {
          variant: "error",
        });
      } else {
        const id = uuidv4();
        const taskWithId = { ...payload, id };
        state.taskItems.push(taskWithId);
        enqueueSnackbar(`Task Added succesfully`, {
          variant: "success",
        });
      }
    },
  },
});

export const { setStatus, AddTask } = TaskSlice.actions;

export const AddTaskFunc =
  (task: TaskItems): AppThunk =>
  async (dispatch) => {
    dispatch(setStatus("loading"));
    dispatch(AddTask(task));

    // try {
    //   const response = await axios.post(
    //     "https://jsonplaceholder.typicode.com/posts",
    //     req
    //   );

    //   if (response.status === 201) {
    //     dispatch(setStatus("data"));
    //     enqueueSnackbar("success", {
    //       variant: "success",
    //     });
    //   } else {
    //     enqueueSnackbar("Something went wrong", {
    //       variant: "error",
    //     });
    //   }
    // } catch (error: any) {
    //   dispatch(setStatus("error"));
    // }
  };
export default TaskSlice;
