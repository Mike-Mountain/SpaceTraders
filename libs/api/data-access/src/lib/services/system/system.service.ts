import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EndpointService,
  System,
  SystemState,
} from '@space-trader/shared/data-access';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '@space-trader/api/utils';

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
}
