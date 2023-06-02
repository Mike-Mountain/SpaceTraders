export interface System {
  symbol: string;
  sectorSymbol: string;
  type: string;
  x: number;
  y: number;
  factions: string[];
  waypoints: SystemWaypoint[];
}

export interface SystemWaypoint {
  symbol: string;
  type: string;
  x: number;
  y: number;
}
