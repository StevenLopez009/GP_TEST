import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "../../data/people";
import { useState } from "react";
import { Person } from "../../models";
import { Checkbox } from "@mui/material";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;
  const columns = [
    {
      field: "actions",
      headerName: "",
      Width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={!!selectedPeople.find((p) => p.id === params.row.id)}
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <div>
      <DataGrid
        rows={People}
        columns={columns}
        disableColumnSelector
        autoHeight
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize,
            },
          },
        }}
        getRowId={(row: any) => row.id}
      />
    </div>
  );
};

export default Home;
