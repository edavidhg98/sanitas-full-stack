import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EncabezadoCatalogoService } from './encabezado-catalogo.service';
import { EncabezadoCatalogo } from './encabezado-catalogo.model';
import { absolutePath } from './encabezado-catalogo.route';

@Component({
  selector: 'app-encabezado-catalogo-list',
  templateUrl: './encabezado-catalogo-list.component.html'
})
export class EncabezadoCatalogoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() encabezadoCatalogos: EncabezadoCatalogo[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private encabezadoCatalogoService: EncabezadoCatalogoService,
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
        this.encabezadoCatalogoService.delete(id).subscribe(response => {
          this.encabezadoCatalogos = this.encabezadoCatalogos.filter(encabezadoCatalogo => encabezadoCatalogo._id !== id);
        });
      }
    }, (reason) => {});
  }
}
