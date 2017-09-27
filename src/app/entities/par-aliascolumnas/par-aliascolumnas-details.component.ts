import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParAliascolumnas } from './par-aliascolumnas.model';
import { ParAliascolumnasService } from './par-aliascolumnas.service';

@Component({
  selector: 'app-par-aliascolumnas-details',
  templateUrl: './par-aliascolumnas-details.component.html'
})
export class ParAliascolumnasDetailsComponent implements OnInit {

  parAliascolumnas: ParAliascolumnas;

    constructor(
      private parAliascolumnasService: ParAliascolumnasService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.parAliascolumnasService.getById(id).subscribe(parAliascolumnas => this.parAliascolumnas = parAliascolumnas);
      });
    }
  }
