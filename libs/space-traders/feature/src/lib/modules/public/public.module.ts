import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './components';
import { FactionCardComponent } from '@spaceTrader/shared/ui';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PublicRoutingModule, FactionCardComponent],
})
export class PublicModule {}
