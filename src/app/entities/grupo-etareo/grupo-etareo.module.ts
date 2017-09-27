import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { GrupoEtareoSharedModule } from '../grupo-etareo/grupo-etareo-shared.module';

import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { GrupoEtareoComponent } from './grupo-etareo.component';
import { GrupoEtareoUpSertComponent } from './grupo-etareo-upsert.component';
import { GrupoEtareoDetailsComponent } from './grupo-etareo-details.component';
import { GrupoEtareoService } from './grupo-etareo.service';

import { grupoEtareoRoutes } from './grupo-etareo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(grupoEtareoRoutes),
    EntitiesSharedModule,
    GrupoEtareoSharedModule,    
    EntidadSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    GrupoEtareoComponent,
    GrupoEtareoUpSertComponent,
    GrupoEtareoDetailsComponent
  ],
  providers: [ GrupoEtareoService ]
})
export class GrupoEtareoModule { }
