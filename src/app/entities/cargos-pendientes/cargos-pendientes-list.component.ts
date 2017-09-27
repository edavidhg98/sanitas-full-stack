import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CargosPendientesService } from './cargos-pendientes.service';
import { CargosPendientes } from './cargos-pendientes.model';
import { absolutePath } from './cargos-pendientes.route';

@Component({
  selector: 'app-cargos-pendientes-list',
  templateUrl: './cargos-pendientes-list.component.html'
})
export class CargosPendientesListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() cargosPendientess: CargosPendientes[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private cargosPendientesService: CargosPendientesService,
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
        this.cargosPendientesService.delete(id).subscribe(response => {
          this.cargosPendientess = this.cargosPendientess.filter(cargosPendientes => cargosPendientes._id !== id);
        });
      }
    }, (reason) => {});
  }
}
