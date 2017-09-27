import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ciudad } from './ciudad.model';
import { CiudadService } from './ciudad.service';

@Component({
  selector: 'app-ciudad-details',
  templateUrl: './ciudad-details.component.html'
})
export class CiudadDetailsComponent implements OnInit {

  ciudad: Ciudad;

    constructor(
      private ciudadService: CiudadService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.ciudadService.getById(id).subscribe(ciudad => this.ciudad = ciudad);
      });
    }
  }
