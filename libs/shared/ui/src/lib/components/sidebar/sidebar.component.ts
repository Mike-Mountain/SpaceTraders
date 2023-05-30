import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationRoutes } from '@space-trader/shared/data-access';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-ui-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() toggle = new EventEmitter();
  protected readonly NavigationRoutes = NavigationRoutes;

  toggleSidebar() {
    this.toggle.emit();
  }
}
