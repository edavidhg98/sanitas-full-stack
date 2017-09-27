import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MedicamentoAltoCostoService } from './medicamento-alto-costo.service';
import { MedicamentoAltoCosto } from './medicamento-alto-costo.model';

import { PrestadorService } from '../prestador/prestador.service';
import { Prestador } from '../prestador/prestador.model';
import { ProductoService } from '../producto/producto.service';
import { Producto } from '../producto/producto.model';
import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-medicamento-alto-costo-upsert',
  templateUrl: './medicamento-alto-costo-upsert.component.html'
})
export class MedicamentoAltoCostoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  medicamentoAltoCosto: MedicamentoAltoCosto;

  /** Many-To-One Relationships */
  prestadors: Prestador[];
  productos: Producto[];
  sucursals: Sucursal[];
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private medicamentoAltoCostoService: MedicamentoAltoCostoService,
    private prestadorService: PrestadorService,
    private productoService: ProductoService,
    private sucursalService: SucursalService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.prestadorService.getAll().subscribe(prestadors => this.prestadors = prestadors);
    this.productoService.getAll().subscribe(productos => this.productos = productos);
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.medicamentoAltoCostoService.getById(id).subscribe(medicamentoAltoCosto => this.medicamentoAltoCosto = medicamentoAltoCosto);
      }
    });
  }

  save(formValues) {
    this.medicamentoAltoCosto = formValues;
    this.medicamentoAltoCostoService.insert(this.medicamentoAltoCosto).subscribe(
      (response) => {
        this.router.navigate(['/entities/medicamento-alto-costo']);
      }
    );
  }

  update() {
    this.medicamentoAltoCostoService.update(this.medicamentoAltoCosto._id, this.medicamentoAltoCosto).subscribe(
      (response) => {
        this.router.navigate(['/entities/medicamento-alto-costo']);
      }
    );
  }
}
