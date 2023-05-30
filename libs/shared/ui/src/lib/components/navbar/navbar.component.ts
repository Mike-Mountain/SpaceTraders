import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavigationRoutes } from '@space-trader/shared/data-access';

@Component({
  selector: 'shared-ui-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() sidebar = new EventEmitter<boolean>();
  protected readonly NavigationRoutes = NavigationRoutes;

  toggleSidebar() {
    this.sidebar.emit();
  }
}
