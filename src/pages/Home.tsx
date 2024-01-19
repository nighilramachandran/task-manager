import { GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import { CustomTable } from "../components/table";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button, Stack, SvgIcon, Typography } from "@mui/material";
import moment from "moment";
import { ChangeStatusFunc, DeleteTaskFunc } from "../redux/reducers/task";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomModal } from "../components/custom-modal/CustomModal";
import { DetailView } from "../components/details-view";

const Home: React.FC = () => {
  //selectors
  const { taskItems, status } = useAppSelector((state) => state.Task);

  //dispatch
  const dispatch = useAppDispatch();

  //columns
  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Title",
      flex: 0.1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 0.1,
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      flex: 0.1,
      renderCell: ({ row }) => (
        <Typography>{moment(row.dueDate).format("DD-MM-YYYY")}</Typography>
      ),
    },
    {
      field: ".",
      headerName: "Operation",
      flex: 0.1,
      renderCell: ({ row }) => (
        <>
          <DetailView
            data={[
              { name: "Ditle", value: row.title },
              { name: "Description", value: row.description },
              {
                name: "Status",
                value: row.isCompleted ? "Completed" : "Pending",
              },
            ]}
          />
        </>
      ),
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "isCompleted",
      headerName: "Status",
      flex: 0.1,
      renderCell: ({ row }) => (
        <Button
          variant="outlined"
          disabled={row.isCompleted}
          onClick={() => handleStatus(row.id)}
        >
          {row.isCompleted ? "Completed" : "Mark as complete"}
        </Button>
      ),
    },
    {
      field: "_",
      headerName: "Delete",
      flex: 0.1,
      renderCell: ({ row }) => (
        <SvgIcon
          sx={{ color: "primary.main", cursor: "pointer" }}
          component={DeleteIcon}
          onClick={() => handleDelete(row.id)}
        />
      ),
      disableColumnMenu: true,
      sortable: false,
    },
  ];

  //functions
  const handleStatus = (id: string) => {
    dispatch(ChangeStatusFunc({ id, isCompleted: true }));
  };
  //functions
  const handleDelete = (id: string) => {
    dispatch(DeleteTaskFunc(id));
  };

  return (
    <>
      <CustomTable
        autoHeight
        rows={taskItems ?? []}
        loading={status === "loading" ? true : false}
        columns={columns}
        disableRowSelectionOnClick
        // onPage
        // onPaginationModelChange={(page) => setPage(page + 1)}
        // onPageChange={(page) => setPage(page + 1)}
        // pagination
        // pageSize={10}
        // paginationMode="server"
        // page={page - 1}
        // rowsPerPageOptions={[10]}
        rowCount={0}
      />
    </>
  );
};

export default Home;
