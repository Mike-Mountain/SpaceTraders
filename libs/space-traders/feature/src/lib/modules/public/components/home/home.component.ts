import { Component } from '@angular/core';
import { NavigationRoutes } from '@space-trader/shared/data-access';

@Component({
  selector: 'feature-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  protected readonly NavigationRoutes = NavigationRoutes;
}
