import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { EpsRecobrableListComponent } from './eps-recobrable-list.component';
import { EpsRecobrableService } from './eps-recobrable.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    EpsRecobrableListComponent
  ],
  declarations: [
    EpsRecobrableListComponent
  ],
  providers: [EpsRecobrableService]
})
export class EpsRecobrableSharedModule { }
