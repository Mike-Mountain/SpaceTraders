import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Faction } from '@space-trader/shared/data-access';

@Component({
  selector: 'shared-ui-faction-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faction-card.component.html',
  styleUrls: ['./faction-card.component.scss'],
})
export class FactionCardComponent {
  @Input() faction!: Faction;
  @Input() selected = '';
  @Input() isRegistration = false;

  @Output() selectFaction = new EventEmitter<string>();

  select(faction: Faction) {
    if (faction.isRecruiting && this.isRegistration) {
      this.selectFaction.emit(faction.symbol);
    }
  }
}
