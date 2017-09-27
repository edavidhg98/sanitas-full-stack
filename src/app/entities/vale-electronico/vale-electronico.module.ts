import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ValeElectronicoSharedModule } from '../vale-electronico/vale-electronico-shared.module';


import { ValeElectronicoComponent } from './vale-electronico.component';
import { ValeElectronicoUpSertComponent } from './vale-electronico-upsert.component';
import { ValeElectronicoDetailsComponent } from './vale-electronico-details.component';
import { ValeElectronicoService } from './vale-electronico.service';

import { valeElectronicoRoutes } from './vale-electronico.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(valeElectronicoRoutes),
    EntitiesSharedModule,
    ValeElectronicoSharedModule    
  ],
  declarations: [
    ValeElectronicoComponent,
    ValeElectronicoUpSertComponent,
    ValeElectronicoDetailsComponent
  ],
  providers: [ ValeElectronicoService ]
})
export class ValeElectronicoModule { }
