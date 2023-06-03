import {Component} from '@angular/core';
import {Contract, Ship, UserState} from "@space-trader/shared/data-access";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, switchMap, tap} from "rxjs";

@Component({
  selector: 'feature-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss'],
})
export class ContractDetailsComponent {

  contractId: string | undefined;
  contractDetails: Observable<Contract | undefined>;
  ships: Ship[] = [];
  currentDate = new Date();

  constructor(private route: ActivatedRoute,
              private userState: UserState) {
    this.contractDetails = route.params.pipe(
      switchMap(params => {
        this.contractId = params['id'];
        return userState.getUserDetails();
      }),
      map(user => {
        this.ships = user.ships;
        return user.contracts.find(contract => contract.id === this.contractId);
      }),
    )
  }
}
