import { Ship } from './ship.interface';
import { Contract } from './contracts.interface';

export interface User {
  token: string;
  agent: Agent;
  contracts: Contract[];
  faction: FactionSummary;
  ships: Ship[];
}

export interface Agent {
  accountId: string;
  symbol: string;
  headquarters: string;
  credits: number;
  startingFaction: string;
}

export interface FactionSummary {
  symbol: string;
  reputation: string;
}

export interface RegistrationDetails {
  name: string;
  factionSymbol: string;
  role: string;
}
