import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ExcepcionProducto } from './excepcion-producto.model';
import { ExcepcionProductoService } from './excepcion-producto.service';

@Component({
  selector: 'app-excepcion-producto-details',
  templateUrl: './excepcion-producto-details.component.html'
})
export class ExcepcionProductoDetailsComponent implements OnInit {

  excepcionProducto: ExcepcionProducto;

    constructor(
      private excepcionProductoService: ExcepcionProductoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.excepcionProductoService.getById(id).subscribe(excepcionProducto => this.excepcionProducto = excepcionProducto);
      });
    }
  }
