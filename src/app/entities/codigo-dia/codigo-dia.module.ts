import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CodigoDiaSharedModule } from '../codigo-dia/codigo-dia-shared.module';


import { CodigoDiaComponent } from './codigo-dia.component';
import { CodigoDiaUpSertComponent } from './codigo-dia-upsert.component';
import { CodigoDiaDetailsComponent } from './codigo-dia-details.component';
import { CodigoDiaService } from './codigo-dia.service';

import { codigoDiaRoutes } from './codigo-dia.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(codigoDiaRoutes),
    EntitiesSharedModule,
    CodigoDiaSharedModule    
  ],
  declarations: [
    CodigoDiaComponent,
    CodigoDiaUpSertComponent,
    CodigoDiaDetailsComponent
  ],
  providers: [ CodigoDiaService ]
})
export class CodigoDiaModule { }
