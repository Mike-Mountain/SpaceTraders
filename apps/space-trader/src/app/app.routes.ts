import {Route} from '@angular/router';
import {NavigationRoutes} from '@space-trader/shared/data-access';
import {
  HomeComponent,
  SignUpComponent,
} from '@space-trader/space-traders/feature';
import {FactionListComponent} from '@spaceTrader/shared/ui';
import {authGuard} from "@space-trader/api/data-access";

export const appRoutes: Route[] = [
  {path: NavigationRoutes.HOME, component: HomeComponent},
  {path: NavigationRoutes.SIGNUP, component: SignUpComponent},
  {path: NavigationRoutes.SIGNIN, component: SignUpComponent},
  {path: NavigationRoutes.FACTIONS, component: FactionListComponent},
  {
    path: NavigationRoutes.DASHBOARD,
    canActivate: [authGuard],
    loadChildren: () =>
      import('@space-trader/space-traders/dashboard').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: NavigationRoutes.WAYPOINT,
    loadChildren: () =>
      import('@space-trader/space-traders/waypoint').then(
        (m) => m.WaypointsModule
      ),
  },
  {
    path: NavigationRoutes.SYSTEM,
    canActivate: [authGuard],
    loadChildren: () =>
      import('@space-trader/space-traders/system').then((m) => m.SystemModule),
  },
  {path: '', pathMatch: 'full', redirectTo: NavigationRoutes.HOME},
];
