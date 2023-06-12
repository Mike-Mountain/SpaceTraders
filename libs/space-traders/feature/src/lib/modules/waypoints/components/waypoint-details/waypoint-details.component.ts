import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
  NavigationRoutes,
  SystemState,
  SystemWaypoint,
  SystemWaypointTrait,
} from '@space-trader/shared/data-access';
import {filter, map, Observable, switchMap, take} from 'rxjs';
import {SystemService} from '@space-trader/api/data-access';
import {Shipyard} from '@space-trader/shared/data-access';

@Component({
  selector: 'feature-waypoint-details',
  templateUrl: './waypoint-details.component.html',
  styleUrls: ['./waypoint-details.component.scss'],
})
export class WaypointDetailsComponent {
  waypoint$: Observable<SystemWaypoint>;
  marketDetails$: Observable<Shipyard> | undefined;
  selectedTrait: SystemWaypointTrait | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private systemState: SystemState,
    private systemService: SystemService
  ) {
    const hasCache = systemState.getHasWaypointCache();
    this.waypoint$ = route.parent!.params.pipe(
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
              if (selectedSystem.traits) {
                this.selectedTrait = selectedSystem.traits[0];
              }
              return selectedSystem;
            })
          );
        }
      })
    );
  }

  selectTrait(
    systemSymbol: string,
    waypointSymbol: string,
    trait: SystemWaypointTrait
  ) {
    this.selectedTrait = trait;
  }

  protected readonly NavigationRoutes = NavigationRoutes;
}
