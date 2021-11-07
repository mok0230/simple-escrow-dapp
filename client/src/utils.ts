import {ethers} from 'ethers';

export const formatDataGridAddress = (params) => truncateAddress(params.value);

const truncateAddress = (address) => address && address.length ? `${address.slice(0, 6)}..${address.slice(address.length - 5)}` : '';

export const formatDataGridWeiValue = (params) => `${convertWeiToEther(params.value)} ETH`;

const convertWeiToEther = wei => ethers.utils.formatEther(wei);

export const convertEtherToWei = eth => ethers.utils.parseEther(eth);
