import { Component, OnInit, Inject } from '@angular/core';

import { HomologacionServiciosAgfaService } from './homologacion-servicios-agfa.service';
import { HomologacionServiciosAgfa } from './homologacion-servicios-agfa.model';

@Component({
  selector: 'app-homologacion-servicios-agfa',
  template: `
              <div class="container-fluid">
                <app-homologacion-servicios-agfa-list [homologacionServiciosAgfas]="homologacionServiciosAgfas"></app-homologacion-servicios-agfa-list>
              </div>
            `
})
export class HomologacionServiciosAgfaComponent implements OnInit {

  homologacionServiciosAgfas: HomologacionServiciosAgfa[] = [];

  constructor(private homologacionServiciosAgfaService: HomologacionServiciosAgfaService) {

  }

  ngOnInit() {
    this.homologacionServiciosAgfaService.getAll().subscribe(homologacionServiciosAgfas => this.homologacionServiciosAgfas = homologacionServiciosAgfas);
  }
}
