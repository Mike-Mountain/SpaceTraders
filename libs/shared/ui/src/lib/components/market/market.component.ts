import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-ui-market',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent {}
