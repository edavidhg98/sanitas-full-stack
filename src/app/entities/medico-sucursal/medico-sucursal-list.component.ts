import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MedicoSucursalService } from './medico-sucursal.service';
import { MedicoSucursal } from './medico-sucursal.model';
import { absolutePath } from './medico-sucursal.route';

@Component({
  selector: 'app-medico-sucursal-list',
  templateUrl: './medico-sucursal-list.component.html'
})
export class MedicoSucursalListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() medicoSucursals: MedicoSucursal[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private medicoSucursalService: MedicoSucursalService,
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
        this.medicoSucursalService.delete(id).subscribe(response => {
          this.medicoSucursals = this.medicoSucursals.filter(medicoSucursal => medicoSucursal._id !== id);
        });
      }
    }, (reason) => {});
  }
}
