import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cama } from './cama.model';
import { CamaService } from './cama.service';

@Component({
  selector: 'app-cama-details',
  templateUrl: './cama-details.component.html'
})
export class CamaDetailsComponent implements OnInit {

  cama: Cama;

    constructor(
      private camaService: CamaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.camaService.getById(id).subscribe(cama => this.cama = cama);
      });
    }
  }
