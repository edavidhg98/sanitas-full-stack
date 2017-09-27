import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SucursalEntidadService } from './sucursal-entidad.service';
import { SucursalEntidad } from './sucursal-entidad.model';
import { absolutePath } from './sucursal-entidad.route';

@Component({
  selector: 'app-sucursal-entidad-list',
  templateUrl: './sucursal-entidad-list.component.html'
})
export class SucursalEntidadListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() sucursalEntidads: SucursalEntidad[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private sucursalEntidadService: SucursalEntidadService,
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
        this.sucursalEntidadService.delete(id).subscribe(response => {
          this.sucursalEntidads = this.sucursalEntidads.filter(sucursalEntidad => sucursalEntidad._id !== id);
        });
      }
    }, (reason) => {});
  }
}
