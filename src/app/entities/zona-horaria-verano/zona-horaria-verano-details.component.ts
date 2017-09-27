import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ZonaHorariaVerano } from './zona-horaria-verano.model';
import { ZonaHorariaVeranoService } from './zona-horaria-verano.service';

@Component({
  selector: 'app-zona-horaria-verano-details',
  templateUrl: './zona-horaria-verano-details.component.html'
})
export class ZonaHorariaVeranoDetailsComponent implements OnInit {

  zonaHorariaVerano: ZonaHorariaVerano;

    constructor(
      private zonaHorariaVeranoService: ZonaHorariaVeranoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.zonaHorariaVeranoService.getById(id).subscribe(zonaHorariaVerano => this.zonaHorariaVerano = zonaHorariaVerano);
      });
    }
  }
