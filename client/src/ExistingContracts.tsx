import { Alert, Paper, Snackbar, Chip } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";
import { formatDataGridAddress, formatDataGridWeiValue } from "./utils";
import DoneIcon from '@mui/icons-material/Done';

const testData = [
  {
    id: 'asdfsadfdsfdsafsdafds',
    depositorAddress: '23fd34rf34te34',
    beneficiaryAddress: '34rfret43t43efrgd',
    arbiterAddress: 'sdf3sf3wesf3sdfs',
    value: '1000000000000000000'
  }
]



function ExistingContracts({existingContracts}) {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  
  const handleCellClick = async e => {
    if(e.field === 'approved') return;

    const cellContent = e.row[e.field];
    console.log('copying to clipboard:', cellContent);
    await navigator.clipboard.writeText(cellContent);
    setSnackbarMessage(`Value copied to clipboard: ${cellContent}`);
    setIsSnackbarOpen(true);
  }

  const handleApproveTransfer = e => {
    console.log('handleApproveTransfer', e)
  }

  const approvalCellRenderer = e => {
    return e.row["approved"] ? 
      <Chip label="Approved!" color="success" /> : 
      <Chip icon={<DoneIcon />} label="Approve Transfer" color="primary" variant="outlined" onClick={() => handleApproveTransfer(e.id)} />
  }

  const columns = [
    { 
      field: 'id', 
      headerName: 'Address',
      valueFormatter: formatDataGridAddress,
      hideSortIcons: true,
      disableColumnMenu: true,
      width: 110,
      headerClassName: 'existing-contracts-header-cell',
      cellClassName: 'existing-contracts-body-cell'
    },
    {
      field: 'depositorAddress',
      headerName: 'Depositor',
      valueFormatter: formatDataGridAddress,
      hideSortIcons: true,
      disableColumnMenu: true,
      width: 110,
      headerClassName: 'existing-contracts-header-cell',
      cellClassName: 'existing-contracts-body-cell'
    },
    {
      field: 'beneficiaryAddress',
      headerName: 'Beneficiary',
      valueFormatter: formatDataGridAddress,
      hideSortIcons: true,
      disableColumnMenu: true,
      width: 110,
      headerClassName: 'existing-contracts-header-cell',
      cellClassName: 'existing-contracts-body-cell'
    },
    {
      field: 'arbiterAddress',
      headerName: 'Arbiter',
      valueFormatter: formatDataGridAddress,
      hideSortIcons: true,
      disableColumnMenu: true,
      width: 110,
      headerClassName: 'existing-contracts-header-cell',
      cellClassName: 'existing-contracts-body-cell'
    },
    {
      field: 'value',
      headerName: 'Value',
      type: 'number',
      valueFormatter: formatDataGridWeiValue,
      hideSortIcons: true,
      disableColumnMenu: true,
      headerClassName: 'existing-contracts-header-cell',
      cellClassName: 'existing-contracts-body-cell'
    },
    {
      field: 'approved',
      headerName: 'Approval Status',
      hideSortIcons: true,
      disableColumnMenu: true,
      headerClassName: 'existing-contracts-header-cell',
      cellClassName: 'existing-contracts-body-cell',
      flex: 2,
      renderCell: approvalCellRenderer
    }
  
    // TODO: add approval
  ];
  
  return (
    <Paper elevation={3} sx={{p: 3, mb:2}}>
      <h2> Existing Contracts </h2>
      {existingContracts.length ? <Alert severity="info" sx={{mb:2}}>Click on a cell in the table below to copy the text content</Alert> : ""}
      {/* DataGrid "No rows" implementation is buggy and requires an explicit height */}
      <div style={{ height: 180 + (50 * (Math.max(existingContracts.length - 1, 0))), width: '100%' }}>
        <DataGrid
        rows={testData}
        columns={columns}
        pageSize={5}
        onCellClick={handleCellClick}
        rowsPerPageOptions={[5]}
      />
      </div>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={4000}
        onClose={() => setIsSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="info">
        {snackbarMessage}
        </Alert>
        </Snackbar>
    </Paper>
  );
}

export default ExistingContracts;

    

    
