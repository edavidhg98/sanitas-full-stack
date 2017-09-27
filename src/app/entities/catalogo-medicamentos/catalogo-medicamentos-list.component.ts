import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CatalogoMedicamentosService } from './catalogo-medicamentos.service';
import { CatalogoMedicamentos } from './catalogo-medicamentos.model';
import { absolutePath } from './catalogo-medicamentos.route';

@Component({
  selector: 'app-catalogo-medicamentos-list',
  templateUrl: './catalogo-medicamentos-list.component.html'
})
export class CatalogoMedicamentosListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() catalogoMedicamentoss: CatalogoMedicamentos[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private catalogoMedicamentosService: CatalogoMedicamentosService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  openDeleteModal(content: any, id: string) {
    this.modalService.open(content).result.then((option) => {
      if (option === this.deleteModalOpts.ok) {
        this.catalogoMedicamentosService.delete(id).subscribe(response => {
          this.catalogoMedicamentoss = this.catalogoMedicamentoss.filter(catalogoMedicamentos => catalogoMedicamentos._id !== id);
        });
      }
    }, (reason) => {});
  }
}
