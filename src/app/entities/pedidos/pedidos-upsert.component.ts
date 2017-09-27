import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PedidosService } from './pedidos.service';
import { Pedidos } from './pedidos.model';

import { PrioridadService } from '../prioridad/prioridad.service';
import { Prioridad } from '../prioridad/prioridad.model';
import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-pedidos-upsert',
  templateUrl: './pedidos-upsert.component.html'
})
export class PedidosUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  pedidos: Pedidos;

  /** Many-To-One Relationships */
  prioridads: Prioridad[];
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pedidosService: PedidosService,
    private prioridadService: PrioridadService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.prioridadService.getAll().subscribe(prioridads => this.prioridads = prioridads);
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.pedidosService.getById(id).subscribe(pedidos => this.pedidos = pedidos);
      }
    });
  }

  save(formValues) {
    this.pedidos = formValues;
    this.pedidosService.insert(this.pedidos).subscribe(
      (response) => {
        this.router.navigate(['/entities/pedidos']);
      }
    );
  }

  update() {
    this.pedidosService.update(this.pedidos._id, this.pedidos).subscribe(
      (response) => {
        this.router.navigate(['/entities/pedidos']);
      }
    );
  }
}
