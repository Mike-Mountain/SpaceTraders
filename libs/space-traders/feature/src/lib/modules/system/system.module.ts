import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SystemRoutingModule} from './system-routing.module';
import {SystemListComponent} from './components';

@NgModule({
  declarations: [SystemListComponent],
  imports: [CommonModule, SystemRoutingModule],
  exports: [SystemListComponent]
})
export class SystemModule {
}
