import { Paper } from "@mui/material";

function ExistingContracts({existingContracts}) {
  return (
    <Paper elevation={3} sx={{p: 3, mb:2}}>
      <h2> Existing Contracts </h2>

      <div id="container">
          {JSON.stringify(existingContracts)}
      </div>
    </Paper>
  );
}

export default ExistingContracts;

    

    
