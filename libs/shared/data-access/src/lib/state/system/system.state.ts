import { Injectable } from '@angular/core';
import {BehaviorSubject, take} from "rxjs";
import {System} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class SystemState {

  _systems = new BehaviorSubject<System[]>([])

  constructor() { }

  getSystems() {
    return this._systems.asObservable().pipe(take(1));
  }

  setSystems(systems: System[]) {
    this._systems.next(systems);
  }

  getHasCache(): boolean {
    return this._systems.value.length > 0;
  }
}
