import { Component, OnInit, Inject } from '@angular/core';

import { ValeElectronicoService } from './vale-electronico.service';
import { ValeElectronico } from './vale-electronico.model';

@Component({
  selector: 'app-vale-electronico',
  template: `
              <div class="container-fluid">
                <app-vale-electronico-list [valeElectronicos]="valeElectronicos"></app-vale-electronico-list>
              </div>
            `
})
export class ValeElectronicoComponent implements OnInit {

  valeElectronicos: ValeElectronico[] = [];

  constructor(private valeElectronicoService: ValeElectronicoService) {

  }

  ngOnInit() {
    this.valeElectronicoService.getAll().subscribe(valeElectronicos => this.valeElectronicos = valeElectronicos);
  }
}
