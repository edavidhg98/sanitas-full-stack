import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Planes } from './planes.model';
import { PlanesService } from './planes.service';

@Component({
  selector: 'app-planes-details',
  templateUrl: './planes-details.component.html'
})
export class PlanesDetailsComponent implements OnInit {

  planes: Planes;

    constructor(
      private planesService: PlanesService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.planesService.getById(id).subscribe(planes => this.planes = planes);
      });
    }
  }
