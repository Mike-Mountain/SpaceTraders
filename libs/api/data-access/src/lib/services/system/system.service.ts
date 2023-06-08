import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EndpointService,
  System,
  SystemState,
  SystemWaypoint,
} from '@space-trader/shared/data-access';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '@space-trader/api/utils';
import { Shipyard } from '../../../../../../shared/data-access/src/lib/models/interfaces/shipyard.interface';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  constructor(
    private http: HttpClient,
    private endpointService: EndpointService,
    private systemState: SystemState
  ) {}

  getAllSystems(page?: string): Observable<System[]> {
    let url = this.endpointService.endpoints.systems + '?limit=20';
    if (page) {
      url += `&page=${page}`;
    }
    return this.http.get<ApiResponse<System[]>>(url).pipe(
      map((response) => {
        this.systemState.setSystems(response.data);
        return response.data;
      })
    );
  }

  getSystemWaypoints(
    systemSymbol: string,
    page?: string
  ): Observable<SystemWaypoint[]> {
    let url = `${this.endpointService.endpoints.systems}/${systemSymbol}${this.endpointService.endpoints.waypoints}?limit=20`;
    if (page) {
      url += `&page=${page}`;
    }
    return this.http.get<ApiResponse<SystemWaypoint[]>>(url).pipe(
      map((response) => {
        this.systemState.setCurrentWaypoints(response.data);
        return response.data;
      })
    );
  }

  getMarketDetails(
    systemSymbol: string,
    waypointSymbol: string,
    marketType: 'shipyard' | 'market'
  ): Observable<Shipyard> {
    const url = `${this.endpointService.endpoints.systems}/${systemSymbol}${this.endpointService.endpoints.waypoints}/${waypointSymbol}/${marketType}`;
    return this.http.get<ApiResponse<Shipyard>>(url).pipe(
      map((response) => {
        return response.data;
      }),
      map((shipyard) => {
        shipyard.ships = shipyard.ships.map((ship) => {
          ship.frame.name = ship.frame.name.split(' ').slice(1).join(' ');
          return ship;
        });
        return shipyard;
      }),
      map((shipYard) => {
        shipYard.types = shipYard.shipTypes.map((shipType) => {
          if (typeof shipType === 'string') {
            return shipType;
          } else {
            const shortName = shipType.type.slice(5, shipType.type.length);
            const split = shortName.split('_');
            const finalType = split
              .map((word) => {
                const letter = word[0].toUpperCase();
                const partialWord = word.slice(1, word.length).toLowerCase();
                return letter + partialWord;
              })
              .join(' ');
            return finalType;
          }
        });
        return shipYard;
      })
    );
  }
}
