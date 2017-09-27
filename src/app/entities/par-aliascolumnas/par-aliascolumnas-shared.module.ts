import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ParAliascolumnasListComponent } from './par-aliascolumnas-list.component';
import { ParAliascolumnasService } from './par-aliascolumnas.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ParAliascolumnasListComponent
  ],
  declarations: [
    ParAliascolumnasListComponent
  ],
  providers: [ParAliascolumnasService]
})
export class ParAliascolumnasSharedModule { }
