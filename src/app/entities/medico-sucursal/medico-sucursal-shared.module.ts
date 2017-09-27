import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { MedicoSucursalListComponent } from './medico-sucursal-list.component';
import { MedicoSucursalService } from './medico-sucursal.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    MedicoSucursalListComponent
  ],
  declarations: [
    MedicoSucursalListComponent
  ],
  providers: [MedicoSucursalService]
})
export class MedicoSucursalSharedModule { }
