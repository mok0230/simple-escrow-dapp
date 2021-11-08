import { BigNumber } from "@ethersproject/bignumber";

export type Contract = {
  id: string;
  depositorAddress: string;
  beneficiaryAddress: string;
  arbiterAddress: string;
  value: string | BigNumber;
  deployedContract: any;
  status: 'submitted' | 'inProgress' | 'approved';
}