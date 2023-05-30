import { Injectable } from '@angular/core';
import { Endpoints } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  endpoints: Endpoints;
  constructor() {
    this.endpoints = {
      gameApiUrl: 'https://api.spacetraders.io/v2',
      auth: 'register',
      factions: 'factions',
    };
  }
}
