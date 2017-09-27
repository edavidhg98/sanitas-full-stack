import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Prefijo } from './prefijo.model';
import { PrefijoService } from './prefijo.service';

@Component({
  selector: 'app-prefijo-details',
  templateUrl: './prefijo-details.component.html'
})
export class PrefijoDetailsComponent implements OnInit {

  prefijo: Prefijo;

    constructor(
      private prefijoService: PrefijoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.prefijoService.getById(id).subscribe(prefijo => this.prefijo = prefijo);
      });
    }
  }
