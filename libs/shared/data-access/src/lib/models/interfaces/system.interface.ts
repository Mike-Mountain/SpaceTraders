import { PlanetTypes } from '../enums/planet-type.enum';

export interface System {
  symbol: string;
  sectorSymbol: string;
  type: PlanetTypes;
  x: number;
  y: number;
  factions: string[];
  waypoints: SystemWaypoint[];
}

export interface SystemWaypoint {
  symbol: string;
  type: PlanetTypes;
  x: number;
  y: number;
}
