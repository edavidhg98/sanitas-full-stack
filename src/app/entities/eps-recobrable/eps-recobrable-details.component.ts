import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EpsRecobrable } from './eps-recobrable.model';
import { EpsRecobrableService } from './eps-recobrable.service';

@Component({
  selector: 'app-eps-recobrable-details',
  templateUrl: './eps-recobrable-details.component.html'
})
export class EpsRecobrableDetailsComponent implements OnInit {

  epsRecobrable: EpsRecobrable;

    constructor(
      private epsRecobrableService: EpsRecobrableService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.epsRecobrableService.getById(id).subscribe(epsRecobrable => this.epsRecobrable = epsRecobrable);
      });
    }
  }
