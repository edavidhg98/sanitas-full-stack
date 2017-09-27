import { Component, OnInit, Inject } from '@angular/core';

import { SucursalService } from './sucursal.service';
import { Sucursal } from './sucursal.model';

@Component({
  selector: 'app-sucursal',
  template: `
              <div class="container-fluid">
                <app-sucursal-list [sucursals]="sucursals"></app-sucursal-list>
              </div>
            `
})
export class SucursalComponent implements OnInit {

  sucursals: Sucursal[] = [];

  constructor(private sucursalService: SucursalService) {

  }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
  }
}
