import { Route } from '@angular/router';
import { NavigationRoutes } from '@space-trader/shared/data-access';
import { SignUpComponent } from '@space-trader/space-traders/feature';

export const appRoutes: Route[] = [
  { path: NavigationRoutes.AUTHENTICATION, component: SignUpComponent },
];
