import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { EpsRecobrableSharedModule } from '../eps-recobrable/eps-recobrable-shared.module';

import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { EpsRecobrableComponent } from './eps-recobrable.component';
import { EpsRecobrableUpSertComponent } from './eps-recobrable-upsert.component';
import { EpsRecobrableDetailsComponent } from './eps-recobrable-details.component';
import { EpsRecobrableService } from './eps-recobrable.service';

import { epsRecobrableRoutes } from './eps-recobrable.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(epsRecobrableRoutes),
    EntitiesSharedModule,
    EpsRecobrableSharedModule,    
    EntidadSharedModule    
  ],
  declarations: [
    EpsRecobrableComponent,
    EpsRecobrableUpSertComponent,
    EpsRecobrableDetailsComponent
  ],
  providers: [ EpsRecobrableService ]
})
export class EpsRecobrableModule { }
