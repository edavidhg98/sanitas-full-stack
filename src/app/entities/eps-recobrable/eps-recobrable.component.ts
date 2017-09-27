import { Component, OnInit, Inject } from '@angular/core';

import { EpsRecobrableService } from './eps-recobrable.service';
import { EpsRecobrable } from './eps-recobrable.model';

@Component({
  selector: 'app-eps-recobrable',
  template: `
              <div class="container-fluid">
                <app-eps-recobrable-list [epsRecobrables]="epsRecobrables"></app-eps-recobrable-list>
              </div>
            `
})
export class EpsRecobrableComponent implements OnInit {

  epsRecobrables: EpsRecobrable[] = [];

  constructor(private epsRecobrableService: EpsRecobrableService) {

  }

  ngOnInit() {
    this.epsRecobrableService.getAll().subscribe(epsRecobrables => this.epsRecobrables = epsRecobrables);
  }
}
