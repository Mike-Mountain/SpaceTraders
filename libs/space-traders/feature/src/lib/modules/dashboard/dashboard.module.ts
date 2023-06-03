import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {
  DashboardControllerComponent,
  ContractDetailsComponent,
} from './components';
import { ShipLocationStringPipe, ContractDescriptionPipe } from './pipes';
import { ContractExpiredPipe } from './pipes/contract-expired/contract-expired.pipe';
import { GetPlanetImagePipe } from '@spaceTrader/shared/ui';
import { HasShipyardPipe } from './pipes/has-shipyard/has-shipyard.pipe';
import { WaypointDetailsComponent } from './components/waypoint-details/waypoint-details.component';

@NgModule({
  declarations: [
    DashboardControllerComponent,
    ShipLocationStringPipe,
    ContractDescriptionPipe,
    ContractDetailsComponent,
    ContractExpiredPipe,
    HasShipyardPipe,
    WaypointDetailsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgOptimizedImage,
    GetPlanetImagePipe,
  ],
  exports: [ContractDetailsComponent],
})
export class DashboardModule {}
