import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ValeElectronicoService } from './vale-electronico.service';
import { ValeElectronico } from './vale-electronico.model';


@Component({
  selector: 'app-vale-electronico-upsert',
  templateUrl: './vale-electronico-upsert.component.html'
})
export class ValeElectronicoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  valeElectronico: ValeElectronico;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private valeElectronicoService: ValeElectronicoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.valeElectronicoService.getById(id).subscribe(valeElectronico => this.valeElectronico = valeElectronico);
      }
    });
  }

  save(formValues) {
    this.valeElectronico = formValues;
    this.valeElectronicoService.insert(this.valeElectronico).subscribe(
      (response) => {
        this.router.navigate(['/entities/vale-electronico']);
      }
    );
  }

  update() {
    this.valeElectronicoService.update(this.valeElectronico._id, this.valeElectronico).subscribe(
      (response) => {
        this.router.navigate(['/entities/vale-electronico']);
      }
    );
  }
}
