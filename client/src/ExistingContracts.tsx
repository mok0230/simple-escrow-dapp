import { Paper } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

// TODO: define widths
const columns = [
  { 
    field: 'address', 
    headerName: 'Address' 
  },
  {
    field: 'beneficiaryAddress',
    headerName: 'Beneficiary',
  },
  {
    field: 'arbiterAddress',
    headerName: 'Arbiter',
  },
  {
    field: 'value',
    headerName: 'Value',
    type: 'number',
  }
  // TODO: add approval
];

// TODO: validate height calculation below
function ExistingContracts({existingContracts}) {
  return (
    <Paper elevation={3} sx={{p: 3, mb:2}}>
      <h2> Existing Contracts </h2>

      {/* DataGrid "No rows" implementation is buggy and requires an explicit height */}
      <div style={{ height: 150 + (50 * (Math.max(existingContracts.length - 1, 0))), width: '100%' }}>
        <DataGrid
        rows={existingContracts}
        columns={columns}
        pageSize={5}
        // rowsPerPageOptions={[5]}
      />
      </div>
    </Paper>
  );
}

export default ExistingContracts;

    

    
