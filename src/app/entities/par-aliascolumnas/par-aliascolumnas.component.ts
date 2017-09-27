import { Component, OnInit, Inject } from '@angular/core';

import { ParAliascolumnasService } from './par-aliascolumnas.service';
import { ParAliascolumnas } from './par-aliascolumnas.model';

@Component({
  selector: 'app-par-aliascolumnas',
  template: `
              <div class="container-fluid">
                <app-par-aliascolumnas-list [parAliascolumnass]="parAliascolumnass"></app-par-aliascolumnas-list>
              </div>
            `
})
export class ParAliascolumnasComponent implements OnInit {

  parAliascolumnass: ParAliascolumnas[] = [];

  constructor(private parAliascolumnasService: ParAliascolumnasService) {

  }

  ngOnInit() {
    this.parAliascolumnasService.getAll().subscribe(parAliascolumnass => this.parAliascolumnass = parAliascolumnass);
  }
}
