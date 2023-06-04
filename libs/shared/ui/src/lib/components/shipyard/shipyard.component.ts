import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-ui-shipyard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipyard.component.html',
  styleUrls: ['./shipyard.component.scss'],
})
export class ShipyardComponent {}
