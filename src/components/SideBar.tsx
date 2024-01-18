import { Paper, Stack, SvgIcon, Typography, useTheme } from "@mui/material";
import React, { CSSProperties, useState } from "react";
import { sideBarConfig } from "../interfaces/Config";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/config";

//styles
const sideBarStyles: CSSProperties = {
  height: "100%",
  padding: 2,
};

//interfaces
interface sideBarProps {
  items: sideBarConfig[];
}

const SideBar: React.FC<sideBarProps> = ({ items }) => {
  const { ROOT } = ROUTES;
  //states
  const [whoIsActive, setWhoIsActive] = useState<string>(
    window.location.pathname.split("/")[1] === ""
      ? ROOT
      : window.location.pathname.split("/")[1]
  );

  //navigate
  const navigate = useNavigate();

  //use Theme
  const { palette } = useTheme();

  //functions
  const handleNavigate = (val: string) => {
    navigate(val);
    setWhoIsActive(val);
  };

  return (
    <Paper sx={{ ...sideBarStyles }}>
      <Stack spacing={2}>
        {items.map((item, index) => {
          const isActive = whoIsActive === item.to;
          const setColor = isActive ? palette.primary.main : "";
          return (
            <StyledStack key={index} onClick={() => handleNavigate(item.to)}>
              <SvgIcon sx={{ color: setColor }} component={item.icon} />
              <Typography sx={{ color: setColor }}>{item.title}</Typography>
            </StyledStack>
          );
        })}
      </Stack>
    </Paper>
  );
};

//components
const StyledStack = styled(Stack)(({ theme }: any) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
  cursor: "pointer",
  borderRadius: theme.shape.borderRadius * 2,
  padding: 2,
  ":hover": {
    background: theme.palette.background.default,
  },
}));

export default SideBar;
