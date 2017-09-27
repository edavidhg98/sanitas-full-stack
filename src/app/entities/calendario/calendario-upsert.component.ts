import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CalendarioService } from './calendario.service';
import { Calendario } from './calendario.model';


@Component({
  selector: 'app-calendario-upsert',
  templateUrl: './calendario-upsert.component.html'
})
export class CalendarioUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  calendario: Calendario;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private calendarioService: CalendarioService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.calendarioService.getById(id).subscribe(calendario => this.calendario = calendario);
      }
    });
  }

  save(formValues) {
    this.calendario = formValues;
    this.calendarioService.insert(this.calendario).subscribe(
      (response) => {
        this.router.navigate(['/entities/calendario']);
      }
    );
  }

  update() {
    this.calendarioService.update(this.calendario._id, this.calendario).subscribe(
      (response) => {
        this.router.navigate(['/entities/calendario']);
      }
    );
  }
}
