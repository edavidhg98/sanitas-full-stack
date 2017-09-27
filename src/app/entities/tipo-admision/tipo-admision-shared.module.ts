import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TipoAdmisionListComponent } from './tipo-admision-list.component';
import { TipoAdmisionService } from './tipo-admision.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TipoAdmisionListComponent
  ],
  declarations: [
    TipoAdmisionListComponent
  ],
  providers: [TipoAdmisionService]
})
export class TipoAdmisionSharedModule { }
