import { Component, OnInit, Inject } from '@angular/core';

import { MedicoSucursalService } from './medico-sucursal.service';
import { MedicoSucursal } from './medico-sucursal.model';

@Component({
  selector: 'app-medico-sucursal',
  template: `
              <div class="container-fluid">
                <app-medico-sucursal-list [medicoSucursals]="medicoSucursals"></app-medico-sucursal-list>
              </div>
            `
})
export class MedicoSucursalComponent implements OnInit {

  medicoSucursals: MedicoSucursal[] = [];

  constructor(private medicoSucursalService: MedicoSucursalService) {

  }

  ngOnInit() {
    this.medicoSucursalService.getAll().subscribe(medicoSucursals => this.medicoSucursals = medicoSucursals);
  }
}
