import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TriageListComponent } from './triage-list.component';
import { TriageService } from './triage.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TriageListComponent
  ],
  declarations: [
    TriageListComponent
  ],
  providers: [TriageService]
})
export class TriageSharedModule { }
