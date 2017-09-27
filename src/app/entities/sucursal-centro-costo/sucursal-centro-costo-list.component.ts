import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SucursalCentroCostoService } from './sucursal-centro-costo.service';
import { SucursalCentroCosto } from './sucursal-centro-costo.model';
import { absolutePath } from './sucursal-centro-costo.route';

@Component({
  selector: 'app-sucursal-centro-costo-list',
  templateUrl: './sucursal-centro-costo-list.component.html'
})
export class SucursalCentroCostoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() sucursalCentroCostos: SucursalCentroCosto[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private sucursalCentroCostoService: SucursalCentroCostoService,
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
        this.sucursalCentroCostoService.delete(id).subscribe(response => {
          this.sucursalCentroCostos = this.sucursalCentroCostos.filter(sucursalCentroCosto => sucursalCentroCosto._id !== id);
        });
      }
    }, (reason) => {});
  }
}
