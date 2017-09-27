import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PypProgramas } from './pyp-programas.model';
import { PypProgramasService } from './pyp-programas.service';

@Component({
  selector: 'app-pyp-programas-details',
  templateUrl: './pyp-programas-details.component.html'
})
export class PypProgramasDetailsComponent implements OnInit {

  pypProgramas: PypProgramas;

    constructor(
      private pypProgramasService: PypProgramasService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.pypProgramasService.getById(id).subscribe(pypProgramas => this.pypProgramas = pypProgramas);
      });
    }
  }
