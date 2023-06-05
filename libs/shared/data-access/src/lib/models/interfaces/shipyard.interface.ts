import { Ship } from './ship.interface';

export interface Shipyard {
  symbol: 'X1-ZH97-55837D';
  shipTypes: ShipType[];
  types: string[];
  transactions: ShipyardTransaction[];
  ships: Ship[];
}

export interface ShipType {
  type: string;
}

export interface ShipyardTransaction {
  shipSymbol: string;
  waypointSymbol: string;
  agentSymbol: string;
  price: number;
  timestamp: string;
}
