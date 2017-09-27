import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Triage } from './triage.model';
import { TriageService } from './triage.service';

@Component({
  selector: 'app-triage-details',
  templateUrl: './triage-details.component.html'
})
export class TriageDetailsComponent implements OnInit {

  triage: Triage;

    constructor(
      private triageService: TriageService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.triageService.getById(id).subscribe(triage => this.triage = triage);
      });
    }
  }
