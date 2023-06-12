import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Shipyard} from "@space-trader/shared/data-access";

@Component({
  selector: 'feature-shipyard-summary',
  templateUrl: './shipyard-summary.component.html',
  styleUrls: ['./shipyard-summary.component.scss'],
})
export class ShipyardSummaryComponent {
  shipyard$!: Observable<Shipyard>

  constructor() {
  }
}
