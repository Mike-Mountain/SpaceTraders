import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap, tap, zip } from 'rxjs';
import { Agent, Contract, FactionSummary, Ship, User } from '../../models';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from '../endpoint/endpoint.service';
import { ApiResponse } from '@space-trader/api/utils';
import { UserState } from '../../state';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  jsonPipe = new JsonPipe();
  constructor(
    private http: HttpClient,
    private endpointService: EndpointService,
    private userState: UserState
  ) {}

  getUserShips() {
    const url = this.endpointService.endpoints.ships;
    return this.http.get<ApiResponse<Ship[]>>(url).pipe(
      map((response) => {
        // TODO: How do I know which ship?
        this.userState.setUserDetails({ ship: response.data[0] });
        return response.data;
      }),
      catchError((err) => {
        throw new Error('error fetching ships:' + err.message);
      })
    );
  }

  getUserContracts() {
    const url = this.endpointService.endpoints.contracts;
    return this.http.get<ApiResponse<Contract[]>>(url).pipe(
      map((response) => {
        // TODO: How do I know which contract?
        this.userState.setUserDetails({ contract: response.data[0] });
        return response.data;
      }),
      catchError((err) => {
        throw new Error('error fetching contracts:' + err.message);
      })
    );
  }

  getUserAgent() {
    const url = this.endpointService.endpoints.agent;
    return this.http.get<ApiResponse<Agent>>(url).pipe(
      map((response) => {
        this.userState.setUserDetails({ agent: response.data });
        return response.data;
      }),
      catchError((err) => {
        throw new Error('error fetching agent:' + err.message);
      })
    );
  }

  getUserFaction() {
    const url = this.endpointService.endpoints.myFaction;
    return this.http.get<ApiResponse<FactionSummary>>(url).pipe(
      map((response) => {
        this.userState.setUserDetails({ faction: response.data });
        return response.data;
      }),
      catchError((err) => {
        throw new Error('error fetching faction:' + err.message);
      })
    );
  }

  combineUserDetails(token: string): Observable<User> {
    const agent$ = this.getUserAgent();
    const faction$ = this.getUserFaction();
    const contract$ = this.getUserContracts();
    const ship$ = this.getUserShips();
    return zip([agent$, faction$, contract$, ship$]).pipe(
      map(([agent, faction, contract, ship]) => {
        return {
          faction: faction,
          contract: contract[0],
          ship: ship[0],
          agent: agent,
          token,
        };
      })
    );
  }
}
