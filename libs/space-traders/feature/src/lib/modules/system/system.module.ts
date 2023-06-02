import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemListComponent } from './components';
import { GetPlanetImagePipe } from '@spaceTrader/shared/ui';

@NgModule({
  declarations: [SystemListComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    NgOptimizedImage,
    GetPlanetImagePipe,
  ],
  exports: [SystemListComponent],
})
export class SystemModule {}
