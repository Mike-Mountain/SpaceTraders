import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationRoutes } from '@space-trader/shared/data-access';
import {
  ContractDetailsComponent,
  DashboardControllerComponent,
} from './components';

const routes: Routes = [
  { path: NavigationRoutes.CONTRACTPATH, component: ContractDetailsComponent },
  { path: '', pathMatch: 'full', component: DashboardControllerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
