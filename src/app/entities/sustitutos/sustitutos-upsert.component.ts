import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SustitutosService } from './sustitutos.service';
import { Sustitutos } from './sustitutos.model';

import { PrestadorService } from '../prestador/prestador.service';
import { Prestador } from '../prestador/prestador.model';
import { ProductoService } from '../producto/producto.service';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-sustitutos-upsert',
  templateUrl: './sustitutos-upsert.component.html'
})
export class SustitutosUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  sustitutos: Sustitutos;

  /** Many-To-One Relationships */
  prestadors: Prestador[];
  productos: Producto[];
  producto1s: Producto[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sustitutosService: SustitutosService,
    private prestadorService: PrestadorService,
    private productoService: ProductoService,
  ) { }

  ngOnInit() {
    this.prestadorService.getAll().subscribe(prestadors => this.prestadors = prestadors);
    this.productoService.getAll().subscribe(productos => this.productos = productos);
    this.productoService.getAll().subscribe(producto1s => this.producto1s = producto1s);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.sustitutosService.getById(id).subscribe(sustitutos => this.sustitutos = sustitutos);
      }
    });
  }

  save(formValues) {
    this.sustitutos = formValues;
    this.sustitutosService.insert(this.sustitutos).subscribe(
      (response) => {
        this.router.navigate(['/entities/sustitutos']);
      }
    );
  }

  update() {
    this.sustitutosService.update(this.sustitutos._id, this.sustitutos).subscribe(
      (response) => {
        this.router.navigate(['/entities/sustitutos']);
      }
    );
  }
}
