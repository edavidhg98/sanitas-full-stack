import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CodigoPostalSharedModule } from '../codigo-postal/codigo-postal-shared.module';


import { CodigoPostalComponent } from './codigo-postal.component';
import { CodigoPostalUpSertComponent } from './codigo-postal-upsert.component';
import { CodigoPostalDetailsComponent } from './codigo-postal-details.component';
import { CodigoPostalService } from './codigo-postal.service';

import { codigoPostalRoutes } from './codigo-postal.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(codigoPostalRoutes),
    EntitiesSharedModule,
    CodigoPostalSharedModule    
  ],
  declarations: [
    CodigoPostalComponent,
    CodigoPostalUpSertComponent,
    CodigoPostalDetailsComponent
  ],
  providers: [ CodigoPostalService ]
})
export class CodigoPostalModule { }
