import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { EntidadAdmisionListComponent } from './entidad-admision-list.component';
import { EntidadAdmisionService } from './entidad-admision.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    EntidadAdmisionListComponent
  ],
  declarations: [
    EntidadAdmisionListComponent
  ],
  providers: [EntidadAdmisionService]
})
export class EntidadAdmisionSharedModule { }
