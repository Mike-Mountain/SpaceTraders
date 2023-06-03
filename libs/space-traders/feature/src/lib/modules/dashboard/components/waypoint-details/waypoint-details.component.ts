import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SystemState, SystemWaypoint} from "@space-trader/shared/data-access";
import {filter, map, Observable, switchMap} from "rxjs";
import {SystemService} from "@space-trader/api/data-access";

@Component({
  selector: 'feature-waypoint-details',
  templateUrl: './waypoint-details.component.html',
  styleUrls: ['./waypoint-details.component.scss'],
})
export class WaypointDetailsComponent {

  waypoint$: Observable<SystemWaypoint>;

  constructor(private route: ActivatedRoute,
              private systemState: SystemState,
              private systemService: SystemService) {
    const hasCache = systemState.getHasWaypointCache();
    this.waypoint$ = route.params.pipe(
      switchMap(params => {
        const systemSymbol =  params['symbol'].slice(0, 6);
        console.log(systemSymbol);
        if (hasCache) {
          return systemState.getWaypoint(params['symbol'])
        } else {
          return systemService.getSystemWaypoints(systemSymbol).pipe(
            map(systems => {
              console.log(systems[0]);
              console.log(systems.filter(system => system.systemSymbol === systemSymbol)[0]);
              return systems.filter(system => system.systemSymbol === systemSymbol)[0]
            })
          );
        }
      })
    )
  }
}
