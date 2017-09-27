import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TiposValoresSharedModule } from '../tipos-valores/tipos-valores-shared.module';


import { TiposValoresComponent } from './tipos-valores.component';
import { TiposValoresUpSertComponent } from './tipos-valores-upsert.component';
import { TiposValoresDetailsComponent } from './tipos-valores-details.component';
import { TiposValoresService } from './tipos-valores.service';

import { tiposValoresRoutes } from './tipos-valores.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tiposValoresRoutes),
    EntitiesSharedModule,
    TiposValoresSharedModule    
  ],
  declarations: [
    TiposValoresComponent,
    TiposValoresUpSertComponent,
    TiposValoresDetailsComponent
  ],
  providers: [ TiposValoresService ]
})
export class TiposValoresModule { }
