import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { RequestStatus } from "../../interfaces";
import { enqueueSnackbar } from "notistack";
import { taskItems as TaskItems } from "../../interfaces/Task";

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
    AddTask: (state, { payload }: PayloadAction<TaskItems[]>) => {
      // const existingIndex = state.taskItems.findIndex(
      //   (task) => task.index === payload.index
      // );
      // if (existingIndex !== -1) {
      //   state.poll[existingIndex] = payload;
      // } else {
      //   state.poll.push(payload);
      // }
    },
  },
});

export const { setStatus, AddTask } = TaskSlice.actions;

export const AddTaskAsync =
  (req: TaskItems[]): AppThunk =>
  async (dispatch) => {
    dispatch(setStatus("loading"));
    dispatch(AddTask(req));

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
