import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CamaListComponent } from './cama-list.component';
import { CamaService } from './cama.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    CamaListComponent
  ],
  declarations: [
    CamaListComponent
  ],
  providers: [CamaService]
})
export class CamaSharedModule { }
