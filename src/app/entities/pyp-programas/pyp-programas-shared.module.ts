import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { PypProgramasListComponent } from './pyp-programas-list.component';
import { PypProgramasService } from './pyp-programas.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    PypProgramasListComponent
  ],
  declarations: [
    PypProgramasListComponent
  ],
  providers: [PypProgramasService]
})
export class PypProgramasSharedModule { }
