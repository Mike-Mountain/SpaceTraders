import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, take} from "rxjs";
import {System, SystemWaypoint} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class SystemState {

  _systems = new BehaviorSubject<System[]>([])
  _waypoints = new BehaviorSubject<SystemWaypoint[]>([]);

  constructor() { }

  getSystems() {
    return this._systems.asObservable().pipe(take(1));
  }

  setSystems(systems: System[]) {
    this._systems.next(systems);
  }

  setCurrentWaypoints(wayPoints: SystemWaypoint[]) {
    this._waypoints.next(wayPoints);
  }

  getCurrentWaypoints(): Observable<SystemWaypoint[]> {
    return this._waypoints.asObservable();
  }

  getWaypoint(symbol: string): Observable<SystemWaypoint> {
    const waypoint = this._waypoints.value.find(waypoint => waypoint.symbol === symbol);
    if (waypoint) {
      return of(waypoint);
    } else {
      throw new Error('No Waypoint Found')
    }
  }

  getHasSystemCache(): boolean {
    return this._systems.value.length > 0;
  }

  getHasWaypointCache(systemSymbol?: string): boolean {
    if (systemSymbol) {
      return this._waypoints.value.filter(waypoint => waypoint.systemSymbol !== systemSymbol).length > 0;
    } else {
      return this._waypoints.value.length > 0;
    }
  }
}
