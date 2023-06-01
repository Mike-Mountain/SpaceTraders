import { RegistrationDetails } from './user.interface';

export interface Ship {
  symbol: string;
  nav: ShipNavigation;
  crew: ShipCrew;
  fuel: ShipFuel;
  frame: ShipFrame;
  reactor: ShipReactor;
  engine: ShipEngine;
  modules: ShipModule[];
  mounts: ShipMount[];
  registration: RegistrationDetails;
  cargo: ShipCargo;
}

export interface ShipNavigation {
  systemSymbol: string;
  waypointSymbol: string;
  route: ShipRoute;
  status: string;
  flightMode: string;
}

export interface ShipRoute {
  departure: {
    symbol: string;
    type: string;
    systemSymbol: string;
    x: number;
    y: number;
  };
  destination: {
    symbol: string;
    type: string;
    systemSymbol: string;
    x: number;
    y: number;
  };
  arrival: Date;
  departureTime: Date;
}

export interface ShipCrew {
  current: number;
  capacity: number;
  required: number;
  rotation: string;
  morale: number;
  wages: number;
}

export interface ShipFuel {
  current: number;
  capacity: number;
  consumed: {
    amount: number;
    timestamp: Date;
  };
}

export interface ShipFrame {
  symbol: string;
  name: string;
  description: string;
  moduleSlots: number;
  mountingPoints: number;
  fuelCapacity: number;
  condition: number;
  requirements: {
    power: number;
    crew: number;
  };
}

export interface ShipReactor {
  symbol: string;
  name: string;
  description: string;
  condition: number;
  powerOutput: number;
  requirements: {
    crew: number;
  };
}

export interface ShipEngine {
  symbol: string;
  name: string;
  description: string;
  condition: number;
  speed: number;
  requirements: {
    power: number;
    crew: number;
  };
}

export interface ShipModule {
  symbol: string;
  name: string;
  description: string;
  capacity: number;
  requirements: {
    crew: number;
    power: number;
    slots: number;
  };
}

export interface ShipMount {
  symbol: string;
  name: string;
  description: string;
  strength: number;
  requirements: {
    crew: number;
    power: number;
  };
}

export interface ShipCargo {
  capacity: number;
  units: number;
  inventory: CargoInventory[];
}

export interface CargoInventory {
  symbol: string;
  name: string;
  description: string;
  units: number;
}
