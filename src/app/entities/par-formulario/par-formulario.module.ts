import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ParFormularioSharedModule } from '../par-formulario/par-formulario-shared.module';


import { ParFormularioComponent } from './par-formulario.component';
import { ParFormularioUpSertComponent } from './par-formulario-upsert.component';
import { ParFormularioDetailsComponent } from './par-formulario-details.component';
import { ParFormularioService } from './par-formulario.service';

import { parFormularioRoutes } from './par-formulario.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(parFormularioRoutes),
    EntitiesSharedModule,
    ParFormularioSharedModule    
  ],
  declarations: [
    ParFormularioComponent,
    ParFormularioUpSertComponent,
    ParFormularioDetailsComponent
  ],
  providers: [ ParFormularioService ]
})
export class ParFormularioModule { }
