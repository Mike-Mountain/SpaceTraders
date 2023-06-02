import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {SystemRoutingModule} from './system-routing.module';
import {SystemListComponent} from './components';

@NgModule({
  declarations: [SystemListComponent],
  imports: [CommonModule, SystemRoutingModule, NgOptimizedImage],
  exports: [SystemListComponent],
})
export class SystemModule {}
