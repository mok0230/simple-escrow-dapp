import { Button, InputAdornment, Paper, TextField } from "@mui/material";

function NewContractForm() {
  return (
    <Paper elevation={3} sx={{p: 3}}>
      <h2> New Contract </h2>
      <TextField label="Arbiter Address" variant="outlined" fullWidth sx={{ mb: 2 }} />
      <TextField label="Beneficiary Address" variant="outlined" fullWidth sx={{ mb: 2 }} />
      <TextField label="Deposit Amount" variant="outlined" InputProps={{
            endAdornment: <InputAdornment position="end">Wei</InputAdornment>,
          }} fullWidth sx={{ mb: 3 }} />
      <Button variant="contained" size="large" fullWidth>Deploy</Button>
    </Paper>
  );
}

export default NewContractForm;
