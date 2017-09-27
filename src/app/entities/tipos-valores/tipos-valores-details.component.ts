import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TiposValores } from './tipos-valores.model';
import { TiposValoresService } from './tipos-valores.service';

@Component({
  selector: 'app-tipos-valores-details',
  templateUrl: './tipos-valores-details.component.html'
})
export class TiposValoresDetailsComponent implements OnInit {

  tiposValores: TiposValores;

    constructor(
      private tiposValoresService: TiposValoresService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tiposValoresService.getById(id).subscribe(tiposValores => this.tiposValores = tiposValores);
      });
    }
  }
