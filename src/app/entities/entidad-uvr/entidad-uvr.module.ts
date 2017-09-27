import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { EntidadUvrSharedModule } from '../entidad-uvr/entidad-uvr-shared.module';

import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { EntidadUvrComponent } from './entidad-uvr.component';
import { EntidadUvrUpSertComponent } from './entidad-uvr-upsert.component';
import { EntidadUvrDetailsComponent } from './entidad-uvr-details.component';
import { EntidadUvrService } from './entidad-uvr.service';

import { entidadUvrRoutes } from './entidad-uvr.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(entidadUvrRoutes),
    EntitiesSharedModule,
    EntidadUvrSharedModule,    
    EntidadSharedModule    
  ],
  declarations: [
    EntidadUvrComponent,
    EntidadUvrUpSertComponent,
    EntidadUvrDetailsComponent
  ],
  providers: [ EntidadUvrService ]
})
export class EntidadUvrModule { }
