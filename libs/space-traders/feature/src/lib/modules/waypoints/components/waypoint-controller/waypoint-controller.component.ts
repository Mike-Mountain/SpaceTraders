import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  SystemState,
  SystemWaypoint,
  SystemWaypointTrait,
} from '@space-trader/shared/data-access';
import { SystemService } from '@space-trader/api/data-access';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'feature-waypoint-controller',
  templateUrl: './waypoint-controller.component.html',
  styleUrls: ['./waypoint-controller.component.scss'],
})
export class WaypointControllerComponent {
  public waypoint$: Observable<SystemWaypoint>;
  public selectedTrait!: SystemWaypointTrait;

  constructor(
    private route: ActivatedRoute,
    private systemState: SystemState,
    private systemService: SystemService
  ) {
    const hasCache = systemState.getHasWaypointCache();
    this.waypoint$ = route.params.pipe(
      switchMap((params) => {
        const systemSymbol = params['symbol'].slice(0, 7);
        if (hasCache) {
          return systemState.getWaypoint(params['symbol']);
        } else {
          return systemService.getSystemWaypoints(systemSymbol).pipe(
            map((systems) => {
              const selectedSystem = systems.filter(
                (system) => system.symbol === params['symbol']
              )[0];
              return selectedSystem;
            })
          );
        }
      })
    );
  }
}
