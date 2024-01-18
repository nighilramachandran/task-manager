import { Paper, Stack, SvgIcon, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import { sideBarConfig } from "../interfaces/utils/IConfig";
import styled from "@emotion/styled";

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
  return (
    <Paper sx={{ ...sideBarStyles }}>
      <Stack spacing={2}>
        {items.map((item) => {
          return (
            <StyledStack>
              <SvgIcon component={item.icon} />
              <Typography>{item.title}</Typography>
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
    background: theme.palette.background.secondary,
  },
}));

export default SideBar;
