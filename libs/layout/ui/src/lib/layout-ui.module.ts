import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components';
import { NavbarComponent, SidebarComponent } from '@spaceTrader/shared/ui';

@NgModule({
  imports: [CommonModule, NavbarComponent, SidebarComponent],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutUiModule {}
