import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MedicoSucursalEntidadService } from './medico-sucursal-entidad.service';
import { MedicoSucursalEntidad } from './medico-sucursal-entidad.model';
import { absolutePath } from './medico-sucursal-entidad.route';

@Component({
  selector: 'app-medico-sucursal-entidad-list',
  templateUrl: './medico-sucursal-entidad-list.component.html'
})
export class MedicoSucursalEntidadListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() medicoSucursalEntidads: MedicoSucursalEntidad[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private medicoSucursalEntidadService: MedicoSucursalEntidadService,
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
        this.medicoSucursalEntidadService.delete(id).subscribe(response => {
          this.medicoSucursalEntidads = this.medicoSucursalEntidads.filter(medicoSucursalEntidad => medicoSucursalEntidad._id !== id);
        });
      }
    }, (reason) => {});
  }
}
