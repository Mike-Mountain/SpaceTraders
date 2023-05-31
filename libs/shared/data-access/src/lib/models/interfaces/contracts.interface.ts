export interface Contract {
  id: string;
  factionSymbol: string;
  type: string;
  terms: ContractTerms;
  accepted: boolean;
  fulfilled: boolean;
  expiration: Date;
  deadlineToAccept: Date;
}

export interface ContractTerms {
  deadline: string;
  payment: {
    onAccepted: number;
    onFulfilled: number;
  };
  deliver: ContractDelivery[];
}

export interface ContractDelivery {
  tradeSymbol: string;
  destinationSymbol: string;
  unitsRequired: number;
  unitsFulfilled: number;
}
