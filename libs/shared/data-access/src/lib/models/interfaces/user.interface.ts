import { Faction } from '../interfaces/factions.interface';
import { Ship } from './ship.interface';
import { Contract } from './contracts.interface';

export interface User {
  token: string;
  agent: Agent;
  contract: Contract;
  faction: FactionSummary;
  ship: Ship;
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