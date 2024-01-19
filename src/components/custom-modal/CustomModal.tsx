import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { FC, ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";

export interface CustomModalProps extends DialogProps {
  title?: string;
  children?: ReactNode;
  onClose?: () => void;
}

export const CustomModal: FC<CustomModalProps> = (props) => {
  const { children, onClose, title, ...rest } = props;

  return (
    <Dialog
      fullWidth
      {...rest}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ fontWeight: "700" }} id="alert-dialog-title">
        {title}
      </DialogTitle>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
