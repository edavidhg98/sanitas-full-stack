import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { PaisSharedModule } from '../pais/pais-shared.module';


import { PaisComponent } from './pais.component';
import { PaisUpSertComponent } from './pais-upsert.component';
import { PaisDetailsComponent } from './pais-details.component';
import { PaisService } from './pais.service';

import { paisRoutes } from './pais.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(paisRoutes),
    EntitiesSharedModule,
    PaisSharedModule    
  ],
  declarations: [
    PaisComponent,
    PaisUpSertComponent,
    PaisDetailsComponent
  ],
  providers: [ PaisService ]
})
export class PaisModule { }
