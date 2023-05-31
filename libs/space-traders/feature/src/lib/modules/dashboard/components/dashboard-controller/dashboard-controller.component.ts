import { Component } from '@angular/core';
import { User, UserState } from '@space-trader/shared/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'feature-dashboard-controller',
  templateUrl: './dashboard-controller.component.html',
  styleUrls: ['./dashboard-controller.component.scss'],
})
export class DashboardControllerComponent {
  user$: Observable<User>;
  constructor(private userState: UserState) {
    this.user$ = userState.getUserDetails();
  }
}
