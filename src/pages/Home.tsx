import { GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import { CustomTable } from "../components/table";
import { useAppSelector } from "../redux/hooks";
import { Typography } from "@mui/material";
import moment from "moment";

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
  // {
  //   field: "type",
  //   headerName: "side",
  //   flex: 0.1,
  //   renderCell: (data: any) => {
  //     return (
  //       <Typography
  //         fontSize={14}
  //         sx={{
  //           color:
  //             data.row.side.toLowerCase() === "sell" ? "text.down" : "text.up",
  //         }}
  //       >
  //         {data.row.side}
  //       </Typography>
  //     );
  //   },
  // },
  // {
  //   field: "coinSymbol",
  //   headerName: "currency",
  //   flex: 0.1,
  //   renderCell: (data: any) => {
  //     return <Typography fontSize={14}>{data.row.coinSymbol}</Typography>;
  //   },
  // },
  // {
  //   field: "price",
  //   headerName: "price",
  //   flex: 0.1,
  //   renderCell: (data: any) => {
  //     return (
  //       <Typography fontSize={14}>
  //         {Number(parseFloat(data.row.price).toFixed(2)).toLocaleString()}
  //       </Typography>
  //     );
  //   },
  // },
  // {
  //   field: "quantity",
  //   headerName: "quantity",
  //   flex: 0.1,
  //   renderCell: (data: any) => {
  //     return (
  //       <Typography fontSize={14}>
  //         {Number(parseFloat(data.row.volume).toFixed(2)).toLocaleString()}
  //       </Typography>
  //     );
  //   },
  // },
  // {
  //   field: "amount",
  //   headerName: "amount",
  //   flex: 0.1,
  //   renderCell: (data: any) => {
  //     return (
  //       <Typography fontSize={14}>
  //         {Number(parseFloat(data.row.totalPrice).toFixed(2)).toLocaleString()}
  //       </Typography>
  //     );
  //   },
  // },
  // {
  //   field: "status_text",
  //   headerName: "status",
  //   flex: 0.1,
  // },
  // {
  //   field: "nickName",
  //   headerName: "conterparty",
  //   flex: 0.1,
  //   renderCell: (data: any) => {
  //     // const router = useRouter()
  //     return <Typography fontSize={14}>{data.row.realName}</Typography>;
  //   },
  // },
];

const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { taskItems } = useAppSelector((state) => state.Task);

  return (
    <>
      <CustomTable
        autoHeight
        rows={taskItems ?? []}
        loading={false}
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
