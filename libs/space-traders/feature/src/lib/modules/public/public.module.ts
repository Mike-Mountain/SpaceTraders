import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent, FactionsListComponent } from './components';
import { FactionCardComponent } from '@spaceTrader/shared/ui';

@NgModule({
  declarations: [HomeComponent, FactionsListComponent],
  imports: [CommonModule, PublicRoutingModule, FactionCardComponent],
  exports: [FactionsListComponent],
})
export class PublicModule {}
