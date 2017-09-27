import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Carnet } from './carnet.model';
import { CarnetService } from './carnet.service';

@Component({
  selector: 'app-carnet-details',
  templateUrl: './carnet-details.component.html'
})
export class CarnetDetailsComponent implements OnInit {

  carnet: Carnet;

    constructor(
      private carnetService: CarnetService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.carnetService.getById(id).subscribe(carnet => this.carnet = carnet);
      });
    }
  }
