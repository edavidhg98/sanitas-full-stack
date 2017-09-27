import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { SalarioSharedModule } from '../salario/salario-shared.module';


import { SalarioComponent } from './salario.component';
import { SalarioUpSertComponent } from './salario-upsert.component';
import { SalarioDetailsComponent } from './salario-details.component';
import { SalarioService } from './salario.service';

import { salarioRoutes } from './salario.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(salarioRoutes),
    EntitiesSharedModule,
    SalarioSharedModule    
  ],
  declarations: [
    SalarioComponent,
    SalarioUpSertComponent,
    SalarioDetailsComponent
  ],
  providers: [ SalarioService ]
})
export class SalarioModule { }
