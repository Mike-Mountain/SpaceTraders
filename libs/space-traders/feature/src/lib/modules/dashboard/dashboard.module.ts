import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardControllerComponent } from './components';

@NgModule({
  declarations: [DashboardControllerComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
