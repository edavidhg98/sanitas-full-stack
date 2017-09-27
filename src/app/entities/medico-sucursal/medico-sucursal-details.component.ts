import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MedicoSucursal } from './medico-sucursal.model';
import { MedicoSucursalService } from './medico-sucursal.service';

@Component({
  selector: 'app-medico-sucursal-details',
  templateUrl: './medico-sucursal-details.component.html'
})
export class MedicoSucursalDetailsComponent implements OnInit {

  medicoSucursal: MedicoSucursal;

    constructor(
      private medicoSucursalService: MedicoSucursalService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.medicoSucursalService.getById(id).subscribe(medicoSucursal => this.medicoSucursal = medicoSucursal);
      });
    }
  }
