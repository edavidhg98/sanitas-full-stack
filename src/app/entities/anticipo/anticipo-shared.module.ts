import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { AnticipoListComponent } from './anticipo-list.component';
import { AnticipoService } from './anticipo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    AnticipoListComponent
  ],
  declarations: [
    AnticipoListComponent
  ],
  providers: [AnticipoService]
})
export class AnticipoSharedModule { }
