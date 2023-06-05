import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shipyard } from '@space-trader/shared/data-access';

@Component({
  selector: 'shared-ui-shipyard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipyard.component.html',
  styleUrls: ['./shipyard.component.scss'],
})
export class ShipyardComponent {
  @Input() shipyard!: Shipyard;
  selectedType = '';

  constructor() {}
}
