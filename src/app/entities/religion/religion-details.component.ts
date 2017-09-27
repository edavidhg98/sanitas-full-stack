import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Religion } from './religion.model';
import { ReligionService } from './religion.service';

@Component({
  selector: 'app-religion-details',
  templateUrl: './religion-details.component.html'
})
export class ReligionDetailsComponent implements OnInit {

  religion: Religion;

    constructor(
      private religionService: ReligionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.religionService.getById(id).subscribe(religion => this.religion = religion);
      });
    }
  }
