import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { WaypointsRoutingModule } from './waypoints-routing.module';
import {
  WaypointControllerComponent,
  WaypointDetailsComponent,
} from './components';
import { GetPlanetImagePipe, ShipyardComponent } from '@spaceTrader/shared/ui';

@NgModule({
  declarations: [WaypointControllerComponent, WaypointDetailsComponent],
  imports: [
    CommonModule,
    WaypointsRoutingModule,
    GetPlanetImagePipe,
    NgOptimizedImage,
    ShipyardComponent,
  ],
})
export class WaypointsModule {}
