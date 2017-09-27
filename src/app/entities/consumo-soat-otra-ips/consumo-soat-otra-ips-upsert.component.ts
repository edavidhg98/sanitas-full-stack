import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConsumoSoatOtraIpsService } from './consumo-soat-otra-ips.service';
import { ConsumoSoatOtraIps } from './consumo-soat-otra-ips.model';


@Component({
  selector: 'app-consumo-soat-otra-ips-upsert',
  templateUrl: './consumo-soat-otra-ips-upsert.component.html'
})
export class ConsumoSoatOtraIpsUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  consumoSoatOtraIps: ConsumoSoatOtraIps;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private consumoSoatOtraIpsService: ConsumoSoatOtraIpsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.consumoSoatOtraIpsService.getById(id).subscribe(consumoSoatOtraIps => this.consumoSoatOtraIps = consumoSoatOtraIps);
      }
    });
  }

  save(formValues) {
    this.consumoSoatOtraIps = formValues;
    this.consumoSoatOtraIpsService.insert(this.consumoSoatOtraIps).subscribe(
      (response) => {
        this.router.navigate(['/entities/consumo-soat-otra-ips']);
      }
    );
  }

  update() {
    this.consumoSoatOtraIpsService.update(this.consumoSoatOtraIps._id, this.consumoSoatOtraIps).subscribe(
      (response) => {
        this.router.navigate(['/entities/consumo-soat-otra-ips']);
      }
    );
  }
}
