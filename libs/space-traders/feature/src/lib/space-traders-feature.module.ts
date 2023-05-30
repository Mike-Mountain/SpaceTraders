import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './modules';

@NgModule({
  imports: [CommonModule],
  exports: [AuthModule],
})
export class SpaceTradersFeatureModule {}
