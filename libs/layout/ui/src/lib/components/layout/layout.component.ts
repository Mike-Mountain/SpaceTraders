import { Component } from '@angular/core';
import { openCloseAnimation } from '@spaceTrader/shared/ui';

@Component({
  selector: 'space-trader-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [openCloseAnimation],
})
export class LayoutComponent {
  sidebarState: 'open' | 'closed' = 'closed';

  updateState() {
    this.sidebarState === 'closed'
      ? (this.sidebarState = 'open')
      : (this.sidebarState = 'closed');
  }
}
