import { Components, Theme } from "@mui/material/styles";

export const buttonOverride: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: () => ({
        borderRadius: "5px",
        textTransform: "initial",
      }),
    },

    variants: [
      {
        props: { variant: "outlined" },
        style: ({ theme }) => ({
          color: theme.palette.text.primary,
          backgroundImage:
            "linear-gradient(199.24deg, #F26722 1%, #F26623 5.95%, #F2622A 9.91%, #F15C35 13.87%, #F05343 17.83%, #EF4652 21.79%, #EE3260 25.75%, #ED1B68 27.73%, #DB2B6F 39.61%, #B04182 63.37%, #6352A0 98.02%, #5E53A3 100%)",
          textAlign: "center",
          border: "none",
          overflow: "hidden",
          zIndex: "0",
          "&:before": {
            content: "''",
            position: "absolute",
            top: "1px",
            right: "1px",
            bottom: "1px",
            left: "1px",
            backgroundColor: theme.palette.background.default,
            borderRadius: "5px",
            boxSizing: "border-box",
            zIndex: "-1",
          },
          "&:hover": {
            border: "none",
          },
        }),
      },
      {
        props: { className: "outlined-circular" },
        style: ({ theme }) => ({
          color: theme.palette.text.primary,
          backgroundImage:
            "linear-gradient(199.24deg, #F26722 1%, #F26623 5.95%, #F2622A 9.91%, #F15C35 13.87%, #F05343 17.83%, #EF4652 21.79%, #EE3260 25.75%, #ED1B68 27.73%, #DB2B6F 39.61%, #B04182 63.37%, #6352A0 98.02%, #5E53A3 100%)",
          textAlign: "center",
          border: "none",
          overflow: "hidden",
          zIndex: "0",
          minWidth: "35px",
          minHeight: "35px",
          padding: 0.5,
          borderRadius: "20px",
          "&:before": {
            content: "''",
            position: "absolute",
            top: "1px",
            right: "1px",
            bottom: "1px",
            left: "1px",
            backgroundColor: theme.palette.background.default,
            borderRadius: "20px",
            boxSizing: "border-box",
            zIndex: "-1",
          },
          "&:hover": {
            border: "none",
          },
        }),
      },
      {
        props: { className: "outlined-contained" },
        style: ({ theme }) => ({
          color: theme.palette.text.primary,
          textAlign: "center",
          minWidth: "35px",
          minHeight: "35px",
          // border: `1px solid ${theme.palette.text.primary}`,
          border: `1px solid #FFFFFF`,

          "&:hover": {
            border: "none",
            background: theme.palette.primary.main,
            color: "#FFFFFF",
          },
        }),
      },
    ],
  },
};
