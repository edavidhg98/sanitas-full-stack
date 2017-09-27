import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { MotivoListComponent } from './motivo-list.component';
import { MotivoService } from './motivo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    MotivoListComponent
  ],
  declarations: [
    MotivoListComponent
  ],
  providers: [MotivoService]
})
export class MotivoSharedModule { }
