import './App.css';
import NewContractForm from './NewContractForm';
import ExistingContracts from './ExistingContracts';

function App() {
  return (
    <div>
      <ExistingContracts />
      <NewContractForm />
    </div>
  );
}

export default App;
