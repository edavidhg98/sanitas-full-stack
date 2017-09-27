import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PrefijoService } from './prefijo.service';
import { Prefijo } from './prefijo.model';


@Component({
  selector: 'app-prefijo-upsert',
  templateUrl: './prefijo-upsert.component.html'
})
export class PrefijoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  prefijo: Prefijo;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private prefijoService: PrefijoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.prefijoService.getById(id).subscribe(prefijo => this.prefijo = prefijo);
      }
    });
  }

  save(formValues) {
    this.prefijo = formValues;
    this.prefijoService.insert(this.prefijo).subscribe(
      (response) => {
        this.router.navigate(['/entities/prefijo']);
      }
    );
  }

  update() {
    this.prefijoService.update(this.prefijo._id, this.prefijo).subscribe(
      (response) => {
        this.router.navigate(['/entities/prefijo']);
      }
    );
  }
}
