import { Component } from '@angular/core';
import { FactionsService } from '@space-trader/api/data-access';
import { map, Observable } from 'rxjs';
import { Faction } from '@space-trader/shared/data-access';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'feature-factions-list',
  templateUrl: './factions-list.component.html',
  styleUrls: ['./factions-list.component.scss'],
})
export class FactionsListComponent {
  factions$: Observable<Faction[]>;
  selectedFaction = '';
  isRegister = false;

  constructor(
    private factionsService: FactionsService,
    private router: Router
  ) {
    this.factions$ = factionsService.getAllFactions().pipe(
      map((factions) => {
        return factions.map((faction: Faction) => {
          const factionNames = faction.name.split(' ');
          let initials: string;
          if (factionNames.length > 1) {
            initials = factionNames.map((name) => name[0]).join('');
          } else {
            initials = factionNames[0][0];
          }
          return {
            ...faction,
            initials,
          };
        });
      })
    );

    this.isRegister = router.url.includes('auth');
  }
}
