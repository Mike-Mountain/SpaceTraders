import {Route} from '@angular/router';
import {authGuard,NavigationRoutes} from '@space-trader/shared/data-access';
import {HomeComponent, SignUpComponent} from '@space-trader/space-traders/feature';

export const appRoutes: Route[] = [
  {path: NavigationRoutes.HOME, component: HomeComponent},
  {path: NavigationRoutes.AUTHENTICATION, component: SignUpComponent},
  {path: '', pathMatch: 'full', redirectTo: NavigationRoutes.HOME}
];
