export const formatDataGridAddress = (params) => truncateAddress(params.value);

const truncateAddress = (address) => address && address.length ? `${address.slice(0, 6)}..${address.slice(address.length - 5)}` : '';
