import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Shipyard} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class ShipyardState {

  private shipyardDetailsSrc = new BehaviorSubject<Shipyard>({} as Shipyard);

  constructor() { }

  getShipyardDetails() {
    return this.shipyardDetailsSrc.asObservable();
  }

  setShipyardDetails(details: Shipyard) {
    this.shipyardDetailsSrc.next(details);
  }

  updateShipyardDetails(details: Partial<Shipyard>) {
    const currentVal = this.shipyardDetailsSrc.value;
    this.shipyardDetailsSrc.next({...currentVal, ...details});
  }
}
