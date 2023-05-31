import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactionCardComponent } from '../faction-card/faction-card.component';
import { map, Observable } from 'rxjs';
import { Faction } from '@space-trader/shared/data-access';
import { FactionsService } from '@space-trader/api/data-access';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-ui-faction-list',
  standalone: true,
  imports: [CommonModule, FactionCardComponent],
  templateUrl: './faction-list.component.html',
  styleUrls: ['./faction-list.component.scss'],
})
export class FactionListComponent {
  @Output() selected = new EventEmitter<string>();

  factions$: Observable<Faction[]>;
  selectedFaction = '';
  isRegister = false;

  constructor(
    private factionsService: FactionsService,
    private router: Router
  ) {
    this.factions$ = factionsService.getAllFactions();
    this.isRegister = router.url.includes('auth');
  }

  selectFaction(faction: string) {
    this.selectedFaction = faction;
    this.selected.emit(faction);
  }
}
