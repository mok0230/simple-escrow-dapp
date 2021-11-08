import './App.css';
import NewContractForm from './NewContractForm';
import ExistingContracts from './ExistingContracts';
import { Container } from '@mui/material';
import { useState } from 'react';
import {ethers} from 'ethers';

declare const ethereum: any;

type Contract = {
  id: string;
  depositorAddress: string;
  beneficiaryAddress: string;
  arbiterAddress: string;
  value: string;
  deployedContract: any;
  status: 'submitted' | 'inProgress' | 'approved';
}

function App() {
  const [existingContracts, setExistingContracts] = useState<Contract[]>([]);

  const provider = new ethers.providers.Web3Provider(ethereum);

  return (
    <Container>
      <h1>Simple Escrow Dapp</h1>
      <ExistingContracts provider={provider} existingContracts={existingContracts} setExistingContracts={setExistingContracts} />
      <NewContractForm provider={provider} setExistingContracts={setExistingContracts} />
    </Container>
  );
}

export default App;
