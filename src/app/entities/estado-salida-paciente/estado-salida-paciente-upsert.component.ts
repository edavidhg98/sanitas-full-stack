import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EstadoSalidaPacienteService } from './estado-salida-paciente.service';
import { EstadoSalidaPaciente } from './estado-salida-paciente.model';


@Component({
  selector: 'app-estado-salida-paciente-upsert',
  templateUrl: './estado-salida-paciente-upsert.component.html'
})
export class EstadoSalidaPacienteUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  estadoSalidaPaciente: EstadoSalidaPaciente;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private estadoSalidaPacienteService: EstadoSalidaPacienteService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.estadoSalidaPacienteService.getById(id).subscribe(estadoSalidaPaciente => this.estadoSalidaPaciente = estadoSalidaPaciente);
      }
    });
  }

  save(formValues) {
    this.estadoSalidaPaciente = formValues;
    this.estadoSalidaPacienteService.insert(this.estadoSalidaPaciente).subscribe(
      (response) => {
        this.router.navigate(['/entities/estado-salida-paciente']);
      }
    );
  }

  update() {
    this.estadoSalidaPacienteService.update(this.estadoSalidaPaciente._id, this.estadoSalidaPaciente).subscribe(
      (response) => {
        this.router.navigate(['/entities/estado-salida-paciente']);
      }
    );
  }
}
