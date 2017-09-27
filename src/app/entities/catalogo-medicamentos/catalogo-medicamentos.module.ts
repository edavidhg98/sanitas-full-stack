import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CatalogoMedicamentosSharedModule } from '../catalogo-medicamentos/catalogo-medicamentos-shared.module';


import { CatalogoMedicamentosComponent } from './catalogo-medicamentos.component';
import { CatalogoMedicamentosUpSertComponent } from './catalogo-medicamentos-upsert.component';
import { CatalogoMedicamentosDetailsComponent } from './catalogo-medicamentos-details.component';
import { CatalogoMedicamentosService } from './catalogo-medicamentos.service';

import { catalogoMedicamentosRoutes } from './catalogo-medicamentos.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(catalogoMedicamentosRoutes),
    EntitiesSharedModule,
    CatalogoMedicamentosSharedModule    
  ],
  declarations: [
    CatalogoMedicamentosComponent,
    CatalogoMedicamentosUpSertComponent,
    CatalogoMedicamentosDetailsComponent
  ],
  providers: [ CatalogoMedicamentosService ]
})
export class CatalogoMedicamentosModule { }
