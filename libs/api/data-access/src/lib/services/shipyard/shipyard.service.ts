import { Injectable } from '@angular/core';
import {ApiResponse, BaseHttpService} from "@space-trader/api/utils";
import {HttpClient} from "@angular/common/http";
import {EndpointService, Shipyard} from "@space-trader/shared/data-access";
import {tap} from "rxjs";
import {ShipyardState} from "@space-trader/shared/data-access";

@Injectable({
  providedIn: 'root'
})
export class ShipyardService extends BaseHttpService{

  constructor(override http: HttpClient,
              private endpointService: EndpointService,
              private shipyardState: ShipyardState) {
    super(http);
  }

  getShipyardDetails(systemSymbol: string, waypointSymbol: string) {
    const endpoints = this.endpointService.endpoints;
    const url = `${endpoints.systems}/${systemSymbol}/${endpoints.waypoints}/${waypointSymbol}/${endpoints.shipyard}`;
    return super.get<ApiResponse<Shipyard>>(url).pipe(
      tap(response => {
        this.shipyardState.setShipyardDetails(response.data);
      })
    )
  }
}
