import { Paper } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { formatDataGridAddress, formatDataGridWeiValue } from "./utils";

// TODO: define widths
const columns = [
  { 
    field: 'id', 
    headerName: 'Address',
    valueFormatter: formatDataGridAddress,
    hideSortIcons: true,
    disableColumnMenu: true,
    width: 110
  },
  {
    field: 'depositorAddress',
    headerName: 'Depositor',
    valueFormatter: formatDataGridAddress,
    hideSortIcons: true,
    disableColumnMenu: true,
    width: 110
  },
  {
    field: 'beneficiaryAddress',
    headerName: 'Beneficiary',
    valueFormatter: formatDataGridAddress,
    hideSortIcons: true,
    disableColumnMenu: true,
    width: 110
  },
  {
    field: 'arbiterAddress',
    headerName: 'Arbiter',
    valueFormatter: formatDataGridAddress,
    hideSortIcons: true,
    disableColumnMenu: true,
    width: 110
  },
  {
    field: 'value',
    headerName: 'Value',
    type: 'number',
    valueFormatter: formatDataGridWeiValue,
    hideSortIcons: true,
    disableColumnMenu: true,
  }
  // TODO: add approval
];

function ExistingContracts({existingContracts}) {
  const handleCellClick = e => {
    console.log('handleCellClick', e)
  }
  
  return (
    <Paper elevation={3} sx={{p: 3, mb:2}}>
      <h2> Existing Contracts </h2>
      {/* DataGrid "No rows" implementation is buggy and requires an explicit height */}
      <div style={{ height: 180 + (50 * (Math.max(existingContracts.length - 1, 0))), width: '100%' }}>
        <DataGrid
        rows={existingContracts}
        columns={columns}
        pageSize={5}
        onCellClick={handleCellClick}
        // rowsPerPageOptions={[5]}
      />
      </div>
    </Paper>
  );
}

export default ExistingContracts;

    

    
