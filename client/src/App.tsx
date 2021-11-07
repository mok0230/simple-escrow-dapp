import './App.css';
import NewContractForm from './NewContractForm';
import ExistingContracts from './ExistingContracts';
import { Container } from '@mui/material';
import { useState } from 'react';

function App() {
  const [existingContracts, setExistingContracts] = useState([]);

  return (
    <Container>
      <h1>Simple Escrow Dapp</h1>
      <ExistingContracts existingContracts={existingContracts} />
      <NewContractForm setExistingContracts={setExistingContracts} />
    </Container>
  );
}

export default App;
