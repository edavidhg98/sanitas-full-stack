import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ZonaHorariaSharedModule } from '../zona-horaria/zona-horaria-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { ZonaHorariaComponent } from './zona-horaria.component';
import { ZonaHorariaUpSertComponent } from './zona-horaria-upsert.component';
import { ZonaHorariaDetailsComponent } from './zona-horaria-details.component';
import { ZonaHorariaService } from './zona-horaria.service';

import { zonaHorariaRoutes } from './zona-horaria.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(zonaHorariaRoutes),
    EntitiesSharedModule,
    ZonaHorariaSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    ZonaHorariaComponent,
    ZonaHorariaUpSertComponent,
    ZonaHorariaDetailsComponent
  ],
  providers: [ ZonaHorariaService ]
})
export class ZonaHorariaModule { }
