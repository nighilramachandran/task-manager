import {
  headerSpacing,
  routesProps,
  sideBarConfig,
} from "../interfaces/utils/IConfig";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";

//header spacings
export const HEADER_SPACINGS: headerSpacing = {
  H_MOBILE: 64,
  H_MAIN_DESKTOP: 55,
};

//header title
export const HEADER_TITLE: string = "Task Manger";

//side bar configs
export const SIDE_BARS: sideBarConfig[] = [
  {
    title: "Home",
    to: "Home",
    icon: HomeIcon,
  },
  {
    title: "Add Task",
    to: "add-task",
    icon: TaskIcon,
  },
];

//routing
export const ROUTES: routesProps = {
  ROOT: "/",
  AUTH: {
    HOME: "home",
    VIEW_TAKS: "tasks",
  },
};
