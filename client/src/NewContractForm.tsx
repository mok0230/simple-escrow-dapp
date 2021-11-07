import { Button, InputAdornment, Paper, TextField } from "@mui/material";
import { useState } from "react";

function NewContractForm() {
  const [arbiterAddress, setArbiterAddress] = useState("");
  const [beneficiaryAddress, setBeneficiaryAddress] = useState("");
  const [depositAmount, setDepositAmount] = useState("");

  // const deploy = async (arbiter, beneficiary, value) => {
  //   await ethereum.request({ method: 'eth_requestAccounts' });
  //   const signer = provider.getSigner();
  //   const factory = new ethers.ContractFactory(Escrow.abi, Escrow.bytecode, signer);
  //   return factory.deploy(arbiter, beneficiary, { value });
  // }

  const handleDeploy = () => {
    console.log('handleDeploy');
    console.log('arbiterAddress', arbiterAddress);
    console.log('beneficiaryAddress', beneficiaryAddress);
    console.log('depositAmount', depositAmount);
  }

  return (
    <Paper elevation={3} sx={{p: 3}}>
      <h2> New Contract </h2>
      <TextField label="Arbiter Address" variant="outlined" fullWidth sx={{ mb: 2 }} value={arbiterAddress} onChange={e => setArbiterAddress(e.target.value)} />
      <TextField label="Beneficiary Address" variant="outlined" fullWidth sx={{ mb: 2 }} value={beneficiaryAddress} onChange={e => setBeneficiaryAddress(e.target.value)} />
      <TextField label="Deposit Amount" variant="outlined" InputProps={{
            endAdornment: <InputAdornment position="end">Wei</InputAdornment>,
          }} fullWidth sx={{ mb: 3 }} value={depositAmount} onChange={e => setDepositAmount(e.target.value)} />
      <Button variant="contained" size="large" fullWidth onClick={handleDeploy}>Deploy</Button>
    </Paper>
  );
}

export default NewContractForm;
