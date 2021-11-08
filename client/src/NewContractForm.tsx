import { Button, InputAdornment, Paper, TextField } from "@mui/material";
import { useState } from "react";
import {ethers} from 'ethers';
import Escrow from './artifacts/contracts/Escrow.sol/Escrow.json';
import { convertEtherToWei } from "./utils";

declare const ethereum: any;

function NewContractForm({provider, setExistingContracts}) {
  const [arbiterAddress, setArbiterAddress] = useState("");
  const [beneficiaryAddress, setBeneficiaryAddress] = useState("");
  const [depositAmountEth, setDepositAmountEth] = useState("");

  const handleDeploy = async () => {
    console.log('handleDeploy');
    console.log('setExistingContracts', setExistingContracts)
    
    await ethereum.request({ method: 'eth_requestAccounts' });

    const signer = provider.getSigner();
    const factory = new ethers.ContractFactory(Escrow.abi, Escrow.bytecode, signer);

    const depositAmountWei = convertEtherToWei(depositAmountEth);
    const deployedContract = await factory.deploy(arbiterAddress, beneficiaryAddress, { value: ethers.BigNumber.from(depositAmountWei) });
    console.log('deployedContract', deployedContract);

    const contractData = {
      id: deployedContract.address,
      depositorAddress: deployedContract.deployTransaction.from,
      arbiterAddress,
      beneficiaryAddress,
      value: depositAmountWei,
      deployedContract
    }

    setExistingContracts(existingContracts => [...existingContracts, contractData])
  }

  return (
    <Paper elevation={3} sx={{p: 3}}>
      <h2> New Contract </h2>
      <TextField label="Arbiter Address" variant="outlined" fullWidth sx={{ mb: 2 }} value={arbiterAddress} onChange={e => setArbiterAddress(e.target.value)} />
      <TextField label="Beneficiary Address" variant="outlined" fullWidth sx={{ mb: 2 }} value={beneficiaryAddress} onChange={e => setBeneficiaryAddress(e.target.value)} />
      <TextField label="Deposit Amount" variant="outlined" InputProps={{
            endAdornment: <InputAdornment position="end">ETH</InputAdornment>,
          }} fullWidth sx={{ mb: 3 }} value={depositAmountEth} onChange={e => setDepositAmountEth(e.target.value)} />
      <Button variant="contained" size="large" fullWidth onClick={handleDeploy}>Deploy</Button>
    </Paper>
  );
}

export default NewContractForm;
