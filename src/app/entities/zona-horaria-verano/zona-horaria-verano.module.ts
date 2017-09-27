import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ZonaHorariaVeranoSharedModule } from '../zona-horaria-verano/zona-horaria-verano-shared.module';

import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { ZonaHorariaVeranoComponent } from './zona-horaria-verano.component';
import { ZonaHorariaVeranoUpSertComponent } from './zona-horaria-verano-upsert.component';
import { ZonaHorariaVeranoDetailsComponent } from './zona-horaria-verano-details.component';
import { ZonaHorariaVeranoService } from './zona-horaria-verano.service';

import { zonaHorariaVeranoRoutes } from './zona-horaria-verano.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(zonaHorariaVeranoRoutes),
    EntitiesSharedModule,
    ZonaHorariaVeranoSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    ZonaHorariaVeranoComponent,
    ZonaHorariaVeranoUpSertComponent,
    ZonaHorariaVeranoDetailsComponent
  ],
  providers: [ ZonaHorariaVeranoService ]
})
export class ZonaHorariaVeranoModule { }
