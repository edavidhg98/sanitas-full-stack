import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AutorizacionBh } from './autorizacion-bh.model';
import { AutorizacionBhService } from './autorizacion-bh.service';

@Component({
  selector: 'app-autorizacion-bh-details',
  templateUrl: './autorizacion-bh-details.component.html'
})
export class AutorizacionBhDetailsComponent implements OnInit {

  autorizacionBh: AutorizacionBh;

    constructor(
      private autorizacionBhService: AutorizacionBhService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.autorizacionBhService.getById(id).subscribe(autorizacionBh => this.autorizacionBh = autorizacionBh);
      });
    }
  }
