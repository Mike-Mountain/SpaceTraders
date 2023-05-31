import { Injectable } from '@angular/core';
import { EndpointService, Faction } from '@space-trader/shared/data-access';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { ApiResponse } from '@space-trader/api/utils';

@Injectable({
  providedIn: 'root',
})
export class FactionsService {
  private factions = new BehaviorSubject<any[]>([]);

  constructor(
    private endpointService: EndpointService,
    private http: HttpClient
  ) {}

  getAllFactions(): Observable<Faction[]> {
    if (this.factions.value.length > 0) {
      return this.factions.asObservable();
    } else {
      const url = `${this.endpointService.endpoints.gameApiUrl}/${this.endpointService.endpoints.factions}?limit=20`;
      return this.http.get<ApiResponse<Faction[]>>(url).pipe(
        map((factions: ApiResponse<Faction[]>) => factions.data),
        tap((factions: Faction[]) => this.factions.next(factions))
      );
    }
  }
}
