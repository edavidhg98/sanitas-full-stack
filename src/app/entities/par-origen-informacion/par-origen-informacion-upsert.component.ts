import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ParOrigenInformacionService } from './par-origen-informacion.service';
import { ParOrigenInformacion } from './par-origen-informacion.model';


@Component({
  selector: 'app-par-origen-informacion-upsert',
  templateUrl: './par-origen-informacion-upsert.component.html'
})
export class ParOrigenInformacionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  parOrigenInformacion: ParOrigenInformacion;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parOrigenInformacionService: ParOrigenInformacionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.parOrigenInformacionService.getById(id).subscribe(parOrigenInformacion => this.parOrigenInformacion = parOrigenInformacion);
      }
    });
  }

  save(formValues) {
    this.parOrigenInformacion = formValues;
    this.parOrigenInformacionService.insert(this.parOrigenInformacion).subscribe(
      (response) => {
        this.router.navigate(['/entities/par-origen-informacion']);
      }
    );
  }

  update() {
    this.parOrigenInformacionService.update(this.parOrigenInformacion._id, this.parOrigenInformacion).subscribe(
      (response) => {
        this.router.navigate(['/entities/par-origen-informacion']);
      }
    );
  }
}
