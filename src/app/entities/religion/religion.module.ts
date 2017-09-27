import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ReligionSharedModule } from '../religion/religion-shared.module';


import { ReligionComponent } from './religion.component';
import { ReligionUpSertComponent } from './religion-upsert.component';
import { ReligionDetailsComponent } from './religion-details.component';
import { ReligionService } from './religion.service';

import { religionRoutes } from './religion.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(religionRoutes),
    EntitiesSharedModule,
    ReligionSharedModule    
  ],
  declarations: [
    ReligionComponent,
    ReligionUpSertComponent,
    ReligionDetailsComponent
  ],
  providers: [ ReligionService ]
})
export class ReligionModule { }
