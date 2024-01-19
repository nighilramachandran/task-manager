import {
  Box,
  Divider,
  Pagination,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { arSD, DataGrid, DataGridProps, enUS } from "@mui/x-data-grid";
import { FC, useContext } from "react";
import { LoadingBox } from "../loading-box";
import useResponsive from "../../utils/hooks/useResponsive";
import { LanguageContext } from "../context/Language";

export interface CustomTableProps extends DataGridProps {
  pageSize?: any;
  page?: any;
}

export const CustomTable: FC<CustomTableProps> = (props) => {
  const [lang] = useContext(LanguageContext);
  const currentLang =
    lang === "ar"
      ? arSD.components.MuiDataGrid.defaultProps.localeText
      : enUS.components.MuiDataGrid.defaultProps.localeText;
  const downLg = useResponsive("down", "lg");

  if (downLg) {
    const status = props.loading ? "loading" : "data";
    const pagesCount = Math.ceil(props.rowCount! / props.pageSize!);
    return (
      <LoadingBox status={status}>
        {props.rows.length > 0 ? (
          <Stack
            spacing={2}
            divider={<Divider flexItem orientation="horizontal" />}
            height={400}
            p={1}
            overflow="scroll"
          >
            {props.rows.map((row) => {
              return (
                <Stack spacing={2} key={row.id}>
                  {props.columns.map((col) => {
                    return (
                      <Stack
                        key={row.id + col.field}
                        direction="row"
                        justifyContent={"space-between"}
                        alignItems="center"
                      >
                        <Typography fontWeight={"bold"}>
                          {col.headerName}
                        </Typography>
                        {col.renderCell ? (
                          col.renderCell({ row } as any)
                        ) : (
                          <Typography>{row[col.field]}</Typography>
                        )}
                      </Stack>
                    );
                  })}
                </Stack>
              );
            })}
          </Stack>
        ) : (
          <CustomNoRowsOverlay />
        )}
        {props.pagination && pagesCount > 0 && (
          <Pagination
            onChange={(_, page) => {
              let propsTemp: any = props;
              propsTemp.onPageChange(page - 1);
            }}
            sx={{
              justifyContent: "end",
              display: "flex",
              p: 2,
            }}
            page={props?.page! + 1}
            count={pagesCount}
            size="small"
          />
        )}
      </LoadingBox>
    );
  } else
    return (
      <Box sx={{ width: "100%", p: 0 }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box sx={{ flexGrow: 1, height: "-moz-available" }}>
            <StyledDataGrid
              localeText={currentLang}
              disableColumnSelector
              {...props}
            />
          </Box>
        </Box>
      </Box>
    );
};
export default function CustomNoRowsOverlay() {
  return (
    <Stack
      spacing={1}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ mt: 3 }}
    >
      <Typography>No Data Found</Typography>
    </Stack>
  );
}

//styled components
export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: "none",
  borderRadius: "0px",

  "& .MuiDataGrid-columnHeader": {
    outline: "none !important",
  },
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: `1px solid #23262F`,
  },
  "& .MuiDataGrid-row.Mui-selected, .MuiDataGrid-row.Mui-selected:hover": {
    backgroundColor: theme.palette.background.header,

    // borderRadius: "12px",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-cell, .MuiDataGrid-footerContainer, .MuiDataGrid-columnHeaders":
    {
      border: "none",
    },
  "& .MuiDataGrid-cell:focus-within": {
    outline: "none",
  },
  "& .css-20bxfm-MuiTypography-root": {
    fontSize: "14px",
  },
  "&  .MuiDataGrid-cellContent": {
    fontSize: "14px",
  },
  "& .css-yl60bx-MuiTypography-root": {
    fontSize: "14px",
  },
  "& .css-qrzauz-MuiTypography-root": {
    fontSize: "14px",
  },
  "& .css-1maruwr-MuiTypography-root": {
    fontSize: "12px",
  },
  "& .css-noho3p-MuiTypography-root": {
    fontSize: "13px",
  },
  "& .css-wb0dc7-MuiTypography-root ": {
    fontSize: "14px",
  },
  "& .css-14ybi0c-MuiTypography-root ": { fontSize: "14px" },
  "& .css-br5wzh-MuiTypography-root": {
    fontSize: "12px",
  },
  "& .css-1q36rmd-MuiStack-root>:not(style)+:not(style)": { fontSize: "12px" },
  ".css-10vdxmm-MuiTypography-root": {
    fontSize: "12px",
  },
  // ".muiltr-h9gzy-MuiDataGrid-columnHeaderTitle": { fontSize: "12px", color: "gray" },
  ".MuiDataGrid-columnHeaderTitle": {
    fontSize: "12px !important",
    color: "gray !important",
  },
}));
