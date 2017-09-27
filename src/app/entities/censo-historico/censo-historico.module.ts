import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CensoHistoricoSharedModule } from '../censo-historico/censo-historico-shared.module';

import { CamaSharedModule } from '../cama/cama-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { CensoHistoricoComponent } from './censo-historico.component';
import { CensoHistoricoUpSertComponent } from './censo-historico-upsert.component';
import { CensoHistoricoDetailsComponent } from './censo-historico-details.component';
import { CensoHistoricoService } from './censo-historico.service';

import { censoHistoricoRoutes } from './censo-historico.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(censoHistoricoRoutes),
    EntitiesSharedModule,
    CensoHistoricoSharedModule,    
    CamaSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    CensoHistoricoComponent,
    CensoHistoricoUpSertComponent,
    CensoHistoricoDetailsComponent
  ],
  providers: [ CensoHistoricoService ]
})
export class CensoHistoricoModule { }
