import { Injectable } from '@angular/core';
import { EndpointService } from '@space-trader/shared/data-access';
import { RegistrationBody } from '../../models/interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ApiResponse } from '@space-trader/api/utils';
import { User } from '@space-trader/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private endpointService: EndpointService,
    private http: HttpClient
  ) {}

  public register(callSign: string, faction: string) {
    const url = `${this.endpointService.endpoints.gameApiUrl}/${this.endpointService.endpoints.auth}`;
    const data: RegistrationBody = { symbol: callSign, faction };
    return this.http
      .post<ApiResponse<User>>(url, data)
      .pipe(map((response) => response.data));
  }
}
