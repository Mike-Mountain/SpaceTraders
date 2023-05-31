import { Component } from '@angular/core';
import { AuthService } from '../../../../../../../../api/data-access/src/lib/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FactionsService } from '../../../../../../../../api/data-access/src/lib/services';

@Component({
  selector: 'feature-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  form: FormGroup;

  factions: string[] = [];

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private factionsService: FactionsService
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
      console.log(factions);
    });
  }

  signup() {
    const { callSign, faction } = this.form.value;
    this.authService.register(callSign, faction).subscribe((data) => {
      console.log(data);
    });
  }
}
