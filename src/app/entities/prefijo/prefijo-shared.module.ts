import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { PrefijoListComponent } from './prefijo-list.component';
import { PrefijoService } from './prefijo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    PrefijoListComponent
  ],
  declarations: [
    PrefijoListComponent
  ],
  providers: [PrefijoService]
})
export class PrefijoSharedModule { }
