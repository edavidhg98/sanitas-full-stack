import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { SustitutosSharedModule } from '../sustitutos/sustitutos-shared.module';

import { PrestadorSharedModule } from '../prestador/prestador-shared.module';
import { ProductoSharedModule } from '../producto/producto-shared.module';

import { SustitutosComponent } from './sustitutos.component';
import { SustitutosUpSertComponent } from './sustitutos-upsert.component';
import { SustitutosDetailsComponent } from './sustitutos-details.component';
import { SustitutosService } from './sustitutos.service';

import { sustitutosRoutes } from './sustitutos.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sustitutosRoutes),
    EntitiesSharedModule,
    SustitutosSharedModule,    
    PrestadorSharedModule,    
    ProductoSharedModule    
  ],
  declarations: [
    SustitutosComponent,
    SustitutosUpSertComponent,
    SustitutosDetailsComponent
  ],
  providers: [ SustitutosService ]
})
export class SustitutosModule { }
