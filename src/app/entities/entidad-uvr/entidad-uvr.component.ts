import { Component, OnInit, Inject } from '@angular/core';

import { EntidadUvrService } from './entidad-uvr.service';
import { EntidadUvr } from './entidad-uvr.model';

@Component({
  selector: 'app-entidad-uvr',
  template: `
              <div class="container-fluid">
                <app-entidad-uvr-list [entidadUvrs]="entidadUvrs"></app-entidad-uvr-list>
              </div>
            `
})
export class EntidadUvrComponent implements OnInit {

  entidadUvrs: EntidadUvr[] = [];

  constructor(private entidadUvrService: EntidadUvrService) {

  }

  ngOnInit() {
    this.entidadUvrService.getAll().subscribe(entidadUvrs => this.entidadUvrs = entidadUvrs);
  }
}
