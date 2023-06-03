import {Component} from '@angular/core';
import {NavigationRoutes, System, SystemWaypoint, User, UserState} from '@space-trader/shared/data-access';
import {map, Observable} from 'rxjs';
import {ContractExpiredPipe} from "../../pipes";
import {SystemService} from "@space-trader/api/data-access";

@Component({
  selector: 'feature-dashboard-controller',
  templateUrl: './dashboard-controller.component.html',
  styleUrls: ['./dashboard-controller.component.scss'],
})
export class DashboardControllerComponent {
  protected readonly NavigationRoutes = NavigationRoutes;
  user$: Observable<User>;
  currentUserLocation$!: Observable<SystemWaypoint>;
  systemWaypoints$!: Observable<SystemWaypoint[]>;
  expandLocation = false;

  constructor(private userState: UserState,
              private systemService: SystemService) {
    this.user$ = userState.getUserDetails().pipe(
      map(user => {
        return {
          ...user,
          contracts: user.contracts.filter(contract => !ContractExpiredPipe.prototype.transform(contract.expiration))
        } as User
      }),
      map(user => {
        this.systemWaypoints$ = systemService.getSystemWaypoints(user.ships[0].nav.systemSymbol);
        this.currentUserLocation$ = this.systemWaypoints$.pipe(
          map(waypoints => {
            return waypoints.filter(waypoint => waypoint.systemSymbol === user.ships[0].nav.systemSymbol)[0];
          })
        );
        return user;
      }),
    );
  }
}
