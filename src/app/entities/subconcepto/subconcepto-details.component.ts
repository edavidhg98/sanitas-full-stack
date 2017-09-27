import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subconcepto } from './subconcepto.model';
import { SubconceptoService } from './subconcepto.service';

@Component({
  selector: 'app-subconcepto-details',
  templateUrl: './subconcepto-details.component.html'
})
export class SubconceptoDetailsComponent implements OnInit {

  subconcepto: Subconcepto;

    constructor(
      private subconceptoService: SubconceptoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.subconceptoService.getById(id).subscribe(subconcepto => this.subconcepto = subconcepto);
      });
    }
  }
