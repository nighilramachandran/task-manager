import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import { CustomTable } from "../components/table";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button, SvgIcon, Typography } from "@mui/material";
import moment from "moment";
import { ChangeStatusFunc, DeleteTaskFunc } from "../redux/reducers/task";
import DeleteIcon from "@mui/icons-material/Delete";
import { DetailView } from "../components/details-view";
import { EditForm } from "../components/form-edit";

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
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 0.1,
      disableColumnMenu: true,
      sortable: false,
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
              { name: "Title", value: row.title },
              { name: "Description", value: row.description },
              {
                name: "Due Date",
                value: moment(row.dueDate).format("DD-MM-YYYY"),
              },
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
      field: ",",
      headerName: "Edit",
      flex: 0.1,
      renderCell: ({ row }) => (
        <EditForm
          data={{
            id: row.id,
            title: row.title,
            description: row.description,
            dueDate: row.dueDate,
          }}
        />
      ),
      disableColumnMenu: true,
      sortable: false,
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
      />
    </>
  );
};

export default Home;
