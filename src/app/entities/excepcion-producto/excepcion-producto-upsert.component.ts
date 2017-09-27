import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ExcepcionProductoService } from './excepcion-producto.service';
import { ExcepcionProducto } from './excepcion-producto.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';
import { PrestadorService } from '../prestador/prestador.service';
import { Prestador } from '../prestador/prestador.model';
import { ProductoService } from '../producto/producto.service';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-excepcion-producto-upsert',
  templateUrl: './excepcion-producto-upsert.component.html'
})
export class ExcepcionProductoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  excepcionProducto: ExcepcionProducto;

  /** Many-To-One Relationships */
  entidads: Entidad[];
  prestadors: Prestador[];
  productos: Producto[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private excepcionProductoService: ExcepcionProductoService,
    private entidadService: EntidadService,
    private prestadorService: PrestadorService,
    private productoService: ProductoService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.prestadorService.getAll().subscribe(prestadors => this.prestadors = prestadors);
    this.productoService.getAll().subscribe(productos => this.productos = productos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.excepcionProductoService.getById(id).subscribe(excepcionProducto => this.excepcionProducto = excepcionProducto);
      }
    });
  }

  save(formValues) {
    this.excepcionProducto = formValues;
    this.excepcionProductoService.insert(this.excepcionProducto).subscribe(
      (response) => {
        this.router.navigate(['/entities/excepcion-producto']);
      }
    );
  }

  update() {
    this.excepcionProductoService.update(this.excepcionProducto._id, this.excepcionProducto).subscribe(
      (response) => {
        this.router.navigate(['/entities/excepcion-producto']);
      }
    );
  }
}
