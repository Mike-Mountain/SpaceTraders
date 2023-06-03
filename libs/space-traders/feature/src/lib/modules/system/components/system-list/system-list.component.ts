import { Component } from '@angular/core';
import {SystemService} from "@space-trader/api/data-access";
import {System, SystemState} from "@space-trader/shared/data-access";
import {Observable} from "rxjs";

@Component({
  selector: 'feature-system-list',
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.scss'],
})
export class SystemListComponent {

  systems$: Observable<System[]>;

  constructor(private systemService: SystemService,
              private systemState: SystemState) {
    this.systems$ = systemState.getHasSystemCache() ? systemState.getSystems() : systemService.getAllSystems();
  }
}
