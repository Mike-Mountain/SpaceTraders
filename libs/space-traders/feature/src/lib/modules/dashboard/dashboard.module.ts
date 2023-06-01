import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardControllerComponent } from './components';
import { ShipLocationStringPipe } from './pipes/ship-location-string/ship-location-string.pipe';
import { ContractDescriptionPipe } from './pipes/contract-description/contract-descrtiption.pipe';

@NgModule({
  declarations: [
    DashboardControllerComponent,
    ShipLocationStringPipe,
    ContractDescriptionPipe,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
