import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Sucursal } from './sucursal.model';
import { SucursalService } from './sucursal.service';

@Component({
  selector: 'app-sucursal-details',
  templateUrl: './sucursal-details.component.html'
})
export class SucursalDetailsComponent implements OnInit {

  sucursal: Sucursal;

    constructor(
      private sucursalService: SucursalService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.sucursalService.getById(id).subscribe(sucursal => this.sucursal = sucursal);
      });
    }
  }
