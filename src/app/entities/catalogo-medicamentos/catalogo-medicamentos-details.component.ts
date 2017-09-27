import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatalogoMedicamentos } from './catalogo-medicamentos.model';
import { CatalogoMedicamentosService } from './catalogo-medicamentos.service';

@Component({
  selector: 'app-catalogo-medicamentos-details',
  templateUrl: './catalogo-medicamentos-details.component.html'
})
export class CatalogoMedicamentosDetailsComponent implements OnInit {

  catalogoMedicamentos: CatalogoMedicamentos;

    constructor(
      private catalogoMedicamentosService: CatalogoMedicamentosService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.catalogoMedicamentosService.getById(id).subscribe(catalogoMedicamentos => this.catalogoMedicamentos = catalogoMedicamentos);
      });
    }
  }
