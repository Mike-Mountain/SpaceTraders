import { Injectable } from '@angular/core';
import { EndpointService } from '@space-trader/shared/data-access';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FactionsService {
  constructor(
    private endpointService: EndpointService,
    private http: HttpClient
  ) {}

  getAllFactions() {
    const url = `${this.endpointService.endpoints.gameApiUrl}/${this.endpointService.endpoints.factions}?limit=20`;
    return this.http.get(url);
  }
}
