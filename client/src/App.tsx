import './App.css';
import NewContractForm from './NewContractForm';
import ExistingContracts from './ExistingContracts';
import { Container } from '@mui/material';
import { useState } from 'react';
import {ethers} from 'ethers';
import { Contract } from './types';

declare global {
  const ethereum: any;
}

function App() {
  const [existingContracts, setExistingContracts] = useState<Contract[]>([]);

  const provider = new ethers.providers.Web3Provider(ethereum);

  return (
    <Container sx={{mb: 3}}>
      <h1>Simple Escrow Dapp</h1>
      <ExistingContracts provider={provider} existingContracts={existingContracts} setExistingContracts={setExistingContracts} />
      <NewContractForm provider={provider} setExistingContracts={setExistingContracts} />
    </Container>
  );
}

export default App;
