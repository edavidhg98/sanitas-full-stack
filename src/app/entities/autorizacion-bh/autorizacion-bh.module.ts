import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { AutorizacionBhSharedModule } from '../autorizacion-bh/autorizacion-bh-shared.module';

import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { AutorizacionBhComponent } from './autorizacion-bh.component';
import { AutorizacionBhUpSertComponent } from './autorizacion-bh-upsert.component';
import { AutorizacionBhDetailsComponent } from './autorizacion-bh-details.component';
import { AutorizacionBhService } from './autorizacion-bh.service';

import { autorizacionBhRoutes } from './autorizacion-bh.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(autorizacionBhRoutes),
    EntitiesSharedModule,
    AutorizacionBhSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    AutorizacionBhComponent,
    AutorizacionBhUpSertComponent,
    AutorizacionBhDetailsComponent
  ],
  providers: [ AutorizacionBhService ]
})
export class AutorizacionBhModule { }
