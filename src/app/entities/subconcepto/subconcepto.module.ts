import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { SubconceptoSharedModule } from '../subconcepto/subconcepto-shared.module';

import { MotivoSharedModule } from '../motivo/motivo-shared.module';
import { TipoAdmisionSharedModule } from '../tipo-admision/tipo-admision-shared.module';

import { SubconceptoComponent } from './subconcepto.component';
import { SubconceptoUpSertComponent } from './subconcepto-upsert.component';
import { SubconceptoDetailsComponent } from './subconcepto-details.component';
import { SubconceptoService } from './subconcepto.service';

import { subconceptoRoutes } from './subconcepto.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(subconceptoRoutes),
    EntitiesSharedModule,
    SubconceptoSharedModule,    
    MotivoSharedModule,    
    TipoAdmisionSharedModule    
  ],
  declarations: [
    SubconceptoComponent,
    SubconceptoUpSertComponent,
    SubconceptoDetailsComponent
  ],
  providers: [ SubconceptoService ]
})
export class SubconceptoModule { }
