import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import {FactionListComponent} from "@spaceTrader/shared/ui";

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FactionListComponent,
  ],
})
export class AuthModule {}
