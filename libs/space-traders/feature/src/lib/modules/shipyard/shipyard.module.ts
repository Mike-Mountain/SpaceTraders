import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipyardRoutingModule } from './shipyard-routing.module';
import { ShipyardSummaryComponent } from './components/shipyard-summary/shipyard-summary.component';

@NgModule({
  declarations: [ShipyardSummaryComponent],
  imports: [CommonModule, ShipyardRoutingModule],
})
export class ShipyardModule {}
