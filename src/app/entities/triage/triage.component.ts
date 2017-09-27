import { Component, OnInit, Inject } from '@angular/core';

import { TriageService } from './triage.service';
import { Triage } from './triage.model';

@Component({
  selector: 'app-triage',
  template: `
              <div class="container-fluid">
                <app-triage-list [triages]="triages"></app-triage-list>
              </div>
            `
})
export class TriageComponent implements OnInit {

  triages: Triage[] = [];

  constructor(private triageService: TriageService) {

  }

  ngOnInit() {
    this.triageService.getAll().subscribe(triages => this.triages = triages);
  }
}
