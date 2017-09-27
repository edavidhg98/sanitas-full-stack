import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ConsultaExternaPypSharedModule } from '../consulta-externa-pyp/consulta-externa-pyp-shared.module';

import { ProcedimientoSharedModule } from '../procedimiento/procedimiento-shared.module';

import { ConsultaExternaPypComponent } from './consulta-externa-pyp.component';
import { ConsultaExternaPypUpSertComponent } from './consulta-externa-pyp-upsert.component';
import { ConsultaExternaPypDetailsComponent } from './consulta-externa-pyp-details.component';
import { ConsultaExternaPypService } from './consulta-externa-pyp.service';

import { consultaExternaPypRoutes } from './consulta-externa-pyp.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(consultaExternaPypRoutes),
    EntitiesSharedModule,
    ConsultaExternaPypSharedModule,    
    ProcedimientoSharedModule    
  ],
  declarations: [
    ConsultaExternaPypComponent,
    ConsultaExternaPypUpSertComponent,
    ConsultaExternaPypDetailsComponent
  ],
  providers: [ ConsultaExternaPypService ]
})
export class ConsultaExternaPypModule { }
