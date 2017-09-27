import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ConsumoSoatOtraIpsSharedModule } from '../consumo-soat-otra-ips/consumo-soat-otra-ips-shared.module';


import { ConsumoSoatOtraIpsComponent } from './consumo-soat-otra-ips.component';
import { ConsumoSoatOtraIpsUpSertComponent } from './consumo-soat-otra-ips-upsert.component';
import { ConsumoSoatOtraIpsDetailsComponent } from './consumo-soat-otra-ips-details.component';
import { ConsumoSoatOtraIpsService } from './consumo-soat-otra-ips.service';

import { consumoSoatOtraIpsRoutes } from './consumo-soat-otra-ips.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(consumoSoatOtraIpsRoutes),
    EntitiesSharedModule,
    ConsumoSoatOtraIpsSharedModule    
  ],
  declarations: [
    ConsumoSoatOtraIpsComponent,
    ConsumoSoatOtraIpsUpSertComponent,
    ConsumoSoatOtraIpsDetailsComponent
  ],
  providers: [ ConsumoSoatOtraIpsService ]
})
export class ConsumoSoatOtraIpsModule { }
