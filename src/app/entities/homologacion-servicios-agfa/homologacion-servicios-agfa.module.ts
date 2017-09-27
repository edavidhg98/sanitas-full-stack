import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { HomologacionServiciosAgfaSharedModule } from '../homologacion-servicios-agfa/homologacion-servicios-agfa-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';
import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { HomologacionServiciosAgfaComponent } from './homologacion-servicios-agfa.component';
import { HomologacionServiciosAgfaUpSertComponent } from './homologacion-servicios-agfa-upsert.component';
import { HomologacionServiciosAgfaDetailsComponent } from './homologacion-servicios-agfa-details.component';
import { HomologacionServiciosAgfaService } from './homologacion-servicios-agfa.service';

import { homologacionServiciosAgfaRoutes } from './homologacion-servicios-agfa.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homologacionServiciosAgfaRoutes),
    EntitiesSharedModule,
    HomologacionServiciosAgfaSharedModule,    
    SucursalSharedModule,    
    EntidadSharedModule    
  ],
  declarations: [
    HomologacionServiciosAgfaComponent,
    HomologacionServiciosAgfaUpSertComponent,
    HomologacionServiciosAgfaDetailsComponent
  ],
  providers: [ HomologacionServiciosAgfaService ]
})
export class HomologacionServiciosAgfaModule { }
