import { headerSpacing, sideBarConfig } from "../interfaces";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";

//header spacings
export const HEADER_SPACINGS: headerSpacing = {
  H_MOBILE: 64,
  H_MAIN_DESKTOP: 55,
};

//header title
export const HEADER_TITLE: string = "Task Manger";

//routing
export const ROUTES = {
  ROOT: "/",
  AUTH: {
    HOME: "home",
    ADD_TASK: "add-tasks",
  },
};

//side bar configs
export const SIDE_BARS: sideBarConfig[] = [
  {
    title: "Home",
    to: ROUTES.ROOT,
    icon: HomeIcon,
  },
  {
    title: "Add Task",
    to: ROUTES.AUTH.ADD_TASK,
    icon: TaskIcon,
  },
];
