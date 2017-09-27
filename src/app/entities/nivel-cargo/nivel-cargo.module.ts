import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { NivelCargoSharedModule } from '../nivel-cargo/nivel-cargo-shared.module';

import { SucursalEntidadSharedModule } from '../sucursal-entidad/sucursal-entidad-shared.module';
import { TipoAdmisionSharedModule } from '../tipo-admision/tipo-admision-shared.module';

import { NivelCargoComponent } from './nivel-cargo.component';
import { NivelCargoUpSertComponent } from './nivel-cargo-upsert.component';
import { NivelCargoDetailsComponent } from './nivel-cargo-details.component';
import { NivelCargoService } from './nivel-cargo.service';

import { nivelCargoRoutes } from './nivel-cargo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(nivelCargoRoutes),
    EntitiesSharedModule,
    NivelCargoSharedModule,    
    SucursalEntidadSharedModule,    
    TipoAdmisionSharedModule    
  ],
  declarations: [
    NivelCargoComponent,
    NivelCargoUpSertComponent,
    NivelCargoDetailsComponent
  ],
  providers: [ NivelCargoService ]
})
export class NivelCargoModule { }
