import { Route } from '@angular/router';
import { NavigationRoutes } from '@space-trader/shared/data-access';
import {
  HomeComponent,
  SignUpComponent,
} from '@space-trader/space-traders/feature';
import { FactionListComponent } from '@spaceTrader/shared/ui';

export const appRoutes: Route[] = [
  { path: NavigationRoutes.HOME, component: HomeComponent },
  { path: NavigationRoutes.AUTHENTICATION, component: SignUpComponent },
  { path: NavigationRoutes.FACTIONS, component: FactionListComponent },
  { path: '', pathMatch: 'full', redirectTo: NavigationRoutes.HOME },
];
