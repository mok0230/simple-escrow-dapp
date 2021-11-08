import {ethers} from 'ethers';

export const formatDataGridAddress = (params) => truncateAddress(params.value);

const truncateAddress = (address) => address && address.length ? `${address.slice(0, 6)}..${address.slice(address.length - 5)}` : '';

export const formatDataGridWeiValue = (params) => `${convertWeiToEther(params.value)} ETH`;

const convertWeiToEther = wei => ethers.utils.formatEther(wei);

export const convertEtherToWei = eth => ethers.utils.parseEther(eth);

export const getContractById = (id, contracts) => {
  console.log('getContractById', id);
  console.log('contracts', contracts);
  const contract = contracts.find(c => c.id === id);
  if (!contract) throw new Error(`Could not find contract ${id}!`);
  return contract;
}

export const approveContract = (contractId, existingContracts, setExistingContracts) => {
  const contract = getContractById(contractId, existingContracts);
  console.log('setting status to approved');
  console.log('contracts')
  contract.status = 'approved';
  setExistingContracts([...existingContracts]);
  console.log('did the table update?')
}
