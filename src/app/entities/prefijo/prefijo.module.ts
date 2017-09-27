import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { PrefijoSharedModule } from '../prefijo/prefijo-shared.module';


import { PrefijoComponent } from './prefijo.component';
import { PrefijoUpSertComponent } from './prefijo-upsert.component';
import { PrefijoDetailsComponent } from './prefijo-details.component';
import { PrefijoService } from './prefijo.service';

import { prefijoRoutes } from './prefijo.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(prefijoRoutes),
    EntitiesSharedModule,
    PrefijoSharedModule    
  ],
  declarations: [
    PrefijoComponent,
    PrefijoUpSertComponent,
    PrefijoDetailsComponent
  ],
  providers: [ PrefijoService ]
})
export class PrefijoModule { }
