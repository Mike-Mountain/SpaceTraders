import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-ui-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {}
