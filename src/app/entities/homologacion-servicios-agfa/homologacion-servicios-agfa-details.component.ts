import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HomologacionServiciosAgfa } from './homologacion-servicios-agfa.model';
import { HomologacionServiciosAgfaService } from './homologacion-servicios-agfa.service';

@Component({
  selector: 'app-homologacion-servicios-agfa-details',
  templateUrl: './homologacion-servicios-agfa-details.component.html'
})
export class HomologacionServiciosAgfaDetailsComponent implements OnInit {

  homologacionServiciosAgfa: HomologacionServiciosAgfa;

    constructor(
      private homologacionServiciosAgfaService: HomologacionServiciosAgfaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.homologacionServiciosAgfaService.getById(id).subscribe(homologacionServiciosAgfa => this.homologacionServiciosAgfa = homologacionServiciosAgfa);
      });
    }
  }
