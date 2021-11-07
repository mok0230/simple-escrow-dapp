import { Paper } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { formatDataGridAddress } from "./utils";

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
    valueFormatter: (params) => "blah",
    hideSortIcons: true,
    disableColumnMenu: true,
  }
  // TODO: add approval
];

const testRows = [
  {
    id: "0x439D33DE569d0d90a84779D9b1d8014fFa588f78",
    beneficiaryAddress: "0x9098F9a43080caf0E56Bf67C6987C595Eb1E1079",
    arbiterAddress: "0x49CfA9E9f1ef068aeA61a8Ac8Cc3696A1b1DFd34",
    value: "1000000000000000000"
  }
]

// TODO: validate height calculation below
function ExistingContracts({existingContracts}) {
  const handleCellClick = e => {
    console.log('handleCellClick', e)
  }
  
  return (
    <Paper elevation={3} sx={{p: 3, mb:2}}>
      <h2> Existing Contracts </h2>
      {/* DataGrid "No rows" implementation is buggy and requires an explicit height */}
      <div style={{ height: 150 + (50 * (Math.max(existingContracts.length - 1, 0))), width: '100%' }}>
        <DataGrid
        rows={testRows}
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

    

    
