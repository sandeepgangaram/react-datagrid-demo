import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "name", headerName: "Name", width: 300, editable: true },
  { field: "city", headerName: "City", width: 150 },
  {
    field: "phone",
    headerName: "Phone Number",
    type: "number",
    width: 200,
    editable: true,
    sortable: false,
  },
  { field: "state", headerName: "State", width: 150 },

  {
    field: "count",
    headerName: "Total",
    type: "number",
    sortable: true,
    width: 90,
  },
];

export default function Table({ entries }) {
  return (
    <div
      style={{
        height: 635,
        width: "100%",
        border: "1px solid grey",
      }}
    >
      <DataGrid
        rows={entries}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        style={{ fontWeight: "700" }}
        disableSelectionOnClick
      />
    </div>
  );
}
