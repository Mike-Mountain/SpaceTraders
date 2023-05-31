import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FactionsService, AuthService } from '@space-trader/api/data-access';
import { UserState } from '@space-trader/shared/data-access';

@Component({
  selector: 'feature-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  form: FormGroup;
  factions: string[] = [];
  selectedFaction: string | undefined;
  isFactionSelect = true;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private factionsService: FactionsService,
    private userState: UserState
  ) {
    this.getFactions();
    this.form = formBuilder.group({
      callSign: ['', Validators.required],
      faction: ['', Validators.required],
    });
  }

  getFactions() {
    this.factionsService.getAllFactions().subscribe((factions: any) => {
      this.factions = factions.map((faction: any) => faction.symbol);
    });
  }

  signup() {
    const { callSign, faction } = this.form.value;
    this.authService.register(callSign, faction).subscribe((data: any) => {
      this.userState.setUserDetails(data);
    });
  }

  selectFaction(faction: string) {
    this.selectedFaction = faction;
    this.form?.controls['faction'].patchValue(faction);
    this.isFactionSelect = false;
  }
}
