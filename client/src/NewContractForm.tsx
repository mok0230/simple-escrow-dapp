import { Button, InputAdornment, Paper, TextField } from "@mui/material";
import { useState } from "react";
import {ethers} from 'ethers';
import Escrow from './artifacts/contracts/Escrow.sol/Escrow.json';

declare var ethereum: any;

function NewContractForm({setExistingContracts}) {
  const [arbiterAddress, setArbiterAddress] = useState("");
  const [beneficiaryAddress, setBeneficiaryAddress] = useState("");
  const [depositAmount, setDepositAmount] = useState("");

  const handleDeploy = async () => {
    console.log('handleDeploy');
    console.log('setExistingContracts', setExistingContracts)
    
    const provider = new ethers.providers.Web3Provider(ethereum);
    await ethereum.request({ method: 'eth_requestAccounts' });
    const signer = provider.getSigner();
    const factory = new ethers.ContractFactory(Escrow.abi, Escrow.bytecode, signer);
    const contractRaw = await factory.deploy(arbiterAddress, beneficiaryAddress, { value: ethers.BigNumber.from(depositAmount) });
    console.log('contractRaw', contractRaw);
    const contractClean = {
      id: contractRaw.address,
      depositorAddress: contractRaw.deployTransaction.from,
      arbiterAddress,
      beneficiaryAddress,
      value: depositAmount
    }
    setExistingContracts(existingContracts => [...existingContracts, contractClean])
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
