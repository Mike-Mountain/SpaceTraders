import {PlanetTypes} from '../enums/planet-type.enum';

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
  systemSymbol?: string;
  "orbitals"?: SystemWaypointOrbital[];
  "traits"?: SystemWaypointTrait[];
  "faction"?: SystemWaypointFaction
}

export interface SystemWaypointOrbital {
  symbol: string;
}

export interface SystemWaypointFaction {
  symbol: string;
}

export interface SystemWaypointTrait {
  symbol: string;
  name: string;
  description: string;
}
