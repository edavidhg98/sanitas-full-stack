import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CatalogoMedicamentosDetalleService } from './catalogo-medicamentos-detalle.service';
import { CatalogoMedicamentosDetalle } from './catalogo-medicamentos-detalle.model';
import { absolutePath } from './catalogo-medicamentos-detalle.route';

@Component({
  selector: 'app-catalogo-medicamentos-detalle-list',
  templateUrl: './catalogo-medicamentos-detalle-list.component.html'
})
export class CatalogoMedicamentosDetalleListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() catalogoMedicamentosDetalles: CatalogoMedicamentosDetalle[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private catalogoMedicamentosDetalleService: CatalogoMedicamentosDetalleService,
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
        this.catalogoMedicamentosDetalleService.delete(id).subscribe(response => {
          this.catalogoMedicamentosDetalles = this.catalogoMedicamentosDetalles.filter(catalogoMedicamentosDetalle => catalogoMedicamentosDetalle._id !== id);
        });
      }
    }, (reason) => {});
  }
}
