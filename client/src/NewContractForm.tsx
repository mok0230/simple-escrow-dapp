import { Alert, Button, InputAdornment, Paper, TextField } from "@mui/material";
import { useState } from "react";
import {ethers} from 'ethers';
import Escrow from './artifacts/contracts/Escrow.sol/Escrow.json';
import { convertEtherToWei } from "./utils";

declare const ethereum: any;

function NewContractForm({provider, setExistingContracts}) {
  const [arbiterAddress, setArbiterAddress] = useState("");
  const [beneficiaryAddress, setBeneficiaryAddress] = useState("");
  const [depositAmountEth, setDepositAmountEth] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const resetNewContractForm = () => {
    setArbiterAddress("");
    setBeneficiaryAddress("");
    setDepositAmountEth("");
  }

  const handleDeploy = async () => {
    console.log('handleDeploy');
    console.log('setExistingContracts', setExistingContracts);

    if(!arbiterAddress || !beneficiaryAddress || !depositAmountEth) {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);
    
    await ethereum.request({ method: 'eth_requestAccounts' });

    try {
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
        deployedContract,
        status: 'submitted'
      }

      resetNewContractForm();

      setExistingContracts(existingContracts => [...existingContracts, contractData])
    } catch (e) {
      console.error('Error!', e);
    }
  }

  return (
    <Paper elevation={3} sx={{p: 3}}>
      <h2> New Contract </h2>
      {isFormValid ? "" : <Alert severity="error" sx={{mb:2}}>Ensure all fields below contain input</Alert>}
      <form>
        <TextField required label="Arbiter Address" variant="outlined" fullWidth sx={{ mb: 2 }} value={arbiterAddress} onChange={e => setArbiterAddress(e.target.value)} />
        <TextField required label="Beneficiary Address" variant="outlined" fullWidth sx={{ mb: 2 }} value={beneficiaryAddress} onChange={e => setBeneficiaryAddress(e.target.value)} />
        <TextField required label="Deposit Amount" variant="outlined" InputProps={{
              endAdornment: <InputAdornment position="end">ETH</InputAdornment>,
            }} fullWidth sx={{ mb: 3 }} value={depositAmountEth} onChange={e => setDepositAmountEth(e.target.value)} />
        <Button variant="contained" size="large" fullWidth onClick={handleDeploy}>Deploy</Button>
      </form>
    </Paper>
  );
}

export default NewContractForm;
