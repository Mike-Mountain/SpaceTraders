import {Component} from '@angular/core';
import {FactionsService} from "@space-trader/api/data-access";
import {Observable} from "rxjs";

@Component({
  selector: 'feature-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  factions$: Observable<any>;

  constructor(private factionsService: FactionsService) {
    this.factions$ = factionsService.getAllFactions();
    this.factions$.subscribe((factions) => console.log(factions));
  }
}
