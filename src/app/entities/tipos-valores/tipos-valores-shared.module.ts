import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TiposValoresListComponent } from './tipos-valores-list.component';
import { TiposValoresService } from './tipos-valores.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TiposValoresListComponent
  ],
  declarations: [
    TiposValoresListComponent
  ],
  providers: [TiposValoresService]
})
export class TiposValoresSharedModule { }
