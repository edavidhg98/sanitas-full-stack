import { Component, OnInit, Inject } from '@angular/core';

import { EntidadAdmisionService } from './entidad-admision.service';
import { EntidadAdmision } from './entidad-admision.model';

@Component({
  selector: 'app-entidad-admision',
  template: `
              <div class="container-fluid">
                <app-entidad-admision-list [entidadAdmisions]="entidadAdmisions"></app-entidad-admision-list>
              </div>
            `
})
export class EntidadAdmisionComponent implements OnInit {

  entidadAdmisions: EntidadAdmision[] = [];

  constructor(private entidadAdmisionService: EntidadAdmisionService) {

  }

  ngOnInit() {
    this.entidadAdmisionService.getAll().subscribe(entidadAdmisions => this.entidadAdmisions = entidadAdmisions);
  }
}
