import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavigationRoutes} from "@space-trader/shared/data-access";
import {SystemListComponent} from "./components";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: NavigationRoutes.SYSTEMLIST},
  {path: NavigationRoutes.SYSTEMLIST, component: SystemListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
