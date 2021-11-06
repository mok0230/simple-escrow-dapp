import './App.css';
import NewContractForm from './NewContractForm';
import ExistingContracts from './ExistingContracts';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
      <h1>Simple Escrow Dapp</h1>
      <ExistingContracts />
      <NewContractForm />
    </Container>
  );
}

export default App;
