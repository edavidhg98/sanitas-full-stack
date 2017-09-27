import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ParOrigenInformacionSharedModule } from '../par-origen-informacion/par-origen-informacion-shared.module';


import { ParOrigenInformacionComponent } from './par-origen-informacion.component';
import { ParOrigenInformacionUpSertComponent } from './par-origen-informacion-upsert.component';
import { ParOrigenInformacionDetailsComponent } from './par-origen-informacion-details.component';
import { ParOrigenInformacionService } from './par-origen-informacion.service';

import { parOrigenInformacionRoutes } from './par-origen-informacion.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(parOrigenInformacionRoutes),
    EntitiesSharedModule,
    ParOrigenInformacionSharedModule    
  ],
  declarations: [
    ParOrigenInformacionComponent,
    ParOrigenInformacionUpSertComponent,
    ParOrigenInformacionDetailsComponent
  ],
  providers: [ ParOrigenInformacionService ]
})
export class ParOrigenInformacionModule { }
