import { Route } from '@angular/router';
import { NavigationRoutes } from '@space-trader/shared/data-access';
import {
  FactionsListComponent,
  HomeComponent,
  SignUpComponent,
} from '@space-trader/space-traders/feature';

export const appRoutes: Route[] = [
  { path: NavigationRoutes.HOME, component: HomeComponent },
  { path: NavigationRoutes.AUTHENTICATION, component: SignUpComponent },
  { path: NavigationRoutes.FACTIONS, component: FactionsListComponent },
  { path: '', pathMatch: 'full', redirectTo: NavigationRoutes.HOME },
];
