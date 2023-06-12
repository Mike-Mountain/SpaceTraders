import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  WaypointControllerComponent,
  WaypointDetailsComponent,
} from './components';

const routes: Routes = [
  {
    path: ':symbol',
    component: WaypointControllerComponent,
    children: [
      {path: 'details', component: WaypointDetailsComponent},
      {path: 'shipyard', loadChildren: () => import('../shipyard/shipyard.module').then(m => m.ShipyardModule)},
      {path: '', pathMatch: 'full', redirectTo: 'details'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaypointsRoutingModule {
}
