import { Injectable } from '@angular/core';
import { Endpoints } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  endpoints: Endpoints;
  baseGameApi: string;
  constructor() {
    this.baseGameApi = 'https://api.spacetraders.io/v2';
    this.endpoints = {
      gameApiUrl: 'https://api.spacetraders.io/v2',
      auth: `${this.baseGameApi}/register`,
      factions: `${this.baseGameApi}/factions`,
      myFaction: `${this.baseGameApi}/my/factions`,
      agent: `${this.baseGameApi}/my/agent`,
      contracts: `${this.baseGameApi}/my/contracts`,
      ships: `${this.baseGameApi}/my/ships`,
      systems: `${this.baseGameApi}/systems`,
      waypoints: '/waypoints'
    };
  }
}
