import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ReligionListComponent } from './religion-list.component';
import { ReligionService } from './religion.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ReligionListComponent
  ],
  declarations: [
    ReligionListComponent
  ],
  providers: [ReligionService]
})
export class ReligionSharedModule { }
