import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Faction} from "@space-trader/shared/data-access";

@Component({
  selector: 'shared-ui-faction-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faction-card.component.html',
  styleUrls: ['./faction-card.component.scss'],
})
export class FactionCardComponent {
  @Input() faction!: Faction;
}
