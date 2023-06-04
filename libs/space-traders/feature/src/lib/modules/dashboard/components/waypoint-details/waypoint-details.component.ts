import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SystemState, SystemWaypoint, SystemWaypointTrait} from "@space-trader/shared/data-access";
import {filter, map, Observable, switchMap, take} from "rxjs";
import {SystemService} from "@space-trader/api/data-access";

@Component({
  selector: 'feature-waypoint-details',
  templateUrl: './waypoint-details.component.html',
  styleUrls: ['./waypoint-details.component.scss'],
})
export class WaypointDetailsComponent {

  waypoint$: Observable<SystemWaypoint>;
  marketDetails$: Observable<any> | undefined;
  selectedTrait: SystemWaypointTrait | undefined;

  constructor(private route: ActivatedRoute,
              private systemState: SystemState,
              private systemService: SystemService) {
    const hasCache = systemState.getHasWaypointCache();
    this.waypoint$ = route.params.pipe(
      switchMap(params => {
        const systemSymbol =  params['symbol'].slice(0, 7);
        if (hasCache) {
          return systemState.getWaypoint(params['symbol'])
        } else {
          return systemService.getSystemWaypoints(systemSymbol).pipe(
            map(systems => {
              const selectedSystem = systems.filter(system => system.symbol === params['symbol'])[0]
              if (selectedSystem.traits) {
                this.selectedTrait = selectedSystem.traits[0];
              }
              return selectedSystem;
            })
          );
        }
      })
    )
  }

  selectTrait(systemSymbol: string, waypointSymbol: string, trait: SystemWaypointTrait) {
    if (trait.symbol === 'SHIPYARD' || trait.symbol === 'MARKETPLACE') {
      const type = trait.symbol === 'SHIPYARD' ? 'shipyard' : 'market';
      this.marketDetails$ = this.systemService.getMarketDetails(systemSymbol, waypointSymbol, type);
      this.selectedTrait = trait;
    } else {
      this.selectedTrait = trait;
    }
  }
}
