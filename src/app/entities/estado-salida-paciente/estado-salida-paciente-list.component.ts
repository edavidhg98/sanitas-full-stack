import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EstadoSalidaPacienteService } from './estado-salida-paciente.service';
import { EstadoSalidaPaciente } from './estado-salida-paciente.model';
import { absolutePath } from './estado-salida-paciente.route';

@Component({
  selector: 'app-estado-salida-paciente-list',
  templateUrl: './estado-salida-paciente-list.component.html'
})
export class EstadoSalidaPacienteListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() estadoSalidaPacientes: EstadoSalidaPaciente[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private estadoSalidaPacienteService: EstadoSalidaPacienteService,
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
        this.estadoSalidaPacienteService.delete(id).subscribe(response => {
          this.estadoSalidaPacientes = this.estadoSalidaPacientes.filter(estadoSalidaPaciente => estadoSalidaPaciente._id !== id);
        });
      }
    }, (reason) => {});
  }
}
