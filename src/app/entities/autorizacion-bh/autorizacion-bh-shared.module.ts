import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { AutorizacionBhListComponent } from './autorizacion-bh-list.component';
import { AutorizacionBhService } from './autorizacion-bh.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    AutorizacionBhListComponent
  ],
  declarations: [
    AutorizacionBhListComponent
  ],
  providers: [AutorizacionBhService]
})
export class AutorizacionBhSharedModule { }
