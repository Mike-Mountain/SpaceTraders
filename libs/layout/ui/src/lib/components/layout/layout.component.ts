import { Component } from '@angular/core';
import { openCloseAnimation } from '@spaceTrader/shared/ui';
import { Agent, User, UserState } from '@space-trader/shared/data-access';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'space-trader-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [openCloseAnimation],
})
export class LayoutComponent {
  sidebarState: 'open' | 'closed' = 'closed';
  agent: Observable<Agent>;

  constructor(private userState: UserState) {
    this.agent = userState.getUserDetails().pipe(map((user) => user.agent));
  }

  updateState() {
    this.sidebarState === 'closed'
      ? (this.sidebarState = 'open')
      : (this.sidebarState = 'closed');
  }
}
