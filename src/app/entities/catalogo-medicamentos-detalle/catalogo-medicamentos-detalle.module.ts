import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CatalogoMedicamentosDetalleSharedModule } from '../catalogo-medicamentos-detalle/catalogo-medicamentos-detalle-shared.module';


import { CatalogoMedicamentosDetalleComponent } from './catalogo-medicamentos-detalle.component';
import { CatalogoMedicamentosDetalleUpSertComponent } from './catalogo-medicamentos-detalle-upsert.component';
import { CatalogoMedicamentosDetalleDetailsComponent } from './catalogo-medicamentos-detalle-details.component';
import { CatalogoMedicamentosDetalleService } from './catalogo-medicamentos-detalle.service';

import { catalogoMedicamentosDetalleRoutes } from './catalogo-medicamentos-detalle.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(catalogoMedicamentosDetalleRoutes),
    EntitiesSharedModule,
    CatalogoMedicamentosDetalleSharedModule    
  ],
  declarations: [
    CatalogoMedicamentosDetalleComponent,
    CatalogoMedicamentosDetalleUpSertComponent,
    CatalogoMedicamentosDetalleDetailsComponent
  ],
  providers: [ CatalogoMedicamentosDetalleService ]
})
export class CatalogoMedicamentosDetalleModule { }
