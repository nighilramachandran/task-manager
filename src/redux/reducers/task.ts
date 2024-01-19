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
        const taskWithIdAndStatus = { ...payload, id, isCompleted: false };
        state.taskItems.push(taskWithIdAndStatus);
        enqueueSnackbar(`Task Added succesfully`, {
          variant: "success",
        });
      }
    },
    ChangeStatus: (
      state,
      { payload }: PayloadAction<{ id: string; isCompleted: boolean }>
    ) => {
      const index = state.taskItems.findIndex((task) => task.id === payload.id);

      if (index !== -1) {
        state.taskItems[index].isCompleted = payload.isCompleted;
      }
    },
    DeleteTask: (state, { payload }: PayloadAction<string>) => {
      state.taskItems = state.taskItems.filter((task) => task.id !== payload);
    },
    UpdateTask: (state, { payload }: PayloadAction<TaskItems>) => {
      const index = state.taskItems.findIndex((task) => task.id === payload.id);
      if (index !== -1) {
        state.taskItems[index] = payload;
      }
    },
  },
});

export const { setStatus, AddTask, ChangeStatus, DeleteTask, UpdateTask } =
  TaskSlice.actions;

//add tasks
export const AddTaskFunc =
  (task: TaskItems): AppThunk =>
  async (dispatch) => {
    dispatch(setStatus("loading"));
    dispatch(AddTask(task));
    dispatch(setStatus("data"));
  };

//change the status
export const ChangeStatusFunc =
  (req: { id: string; isCompleted: boolean }): AppThunk =>
  async (dispatch) => {
    dispatch(setStatus("loading"));
    dispatch(ChangeStatus(req));
    dispatch(setStatus("data"));
  };
//Delete task
export const DeleteTaskFunc =
  (req: string): AppThunk =>
  async (dispatch) => {
    dispatch(setStatus("loading"));
    dispatch(DeleteTask(req));
    dispatch(setStatus("data"));
  };
//Delete task
export const UpdateTaskFunc =
  (task: TaskItems): AppThunk =>
  async (dispatch) => {
    dispatch(setStatus("loading"));
    dispatch(UpdateTask(task));
    dispatch(setStatus("data"));
  };
export default TaskSlice;
