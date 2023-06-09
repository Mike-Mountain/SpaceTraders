import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {
  DashboardControllerComponent,
  ContractDetailsComponent,
} from './components';
import { ShipLocationStringPipe, ContractDescriptionPipe } from './pipes';
import { ContractExpiredPipe } from './pipes/contract-expired/contract-expired.pipe';
import { GetPlanetImagePipe, ShipyardComponent } from '@spaceTrader/shared/ui';
import { HasShipyardPipe } from './pipes/has-shipyard/has-shipyard.pipe';

@NgModule({
  declarations: [
    DashboardControllerComponent,
    ShipLocationStringPipe,
    ContractDescriptionPipe,
    ContractDetailsComponent,
    ContractExpiredPipe,
    HasShipyardPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgOptimizedImage,
    GetPlanetImagePipe,
    ShipyardComponent,
  ],
  exports: [ContractDetailsComponent],
})
export class DashboardModule {}
