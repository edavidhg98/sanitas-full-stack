import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CensoTrasladoService } from './censo-traslado.service';
import { CensoTraslado } from './censo-traslado.model';

import { CamaService } from '../cama/cama.service';
import { Cama } from '../cama/cama.model';
import { MotivoService } from '../motivo/motivo.service';
import { Motivo } from '../motivo/motivo.model';

@Component({
  selector: 'app-censo-traslado-upsert',
  templateUrl: './censo-traslado-upsert.component.html'
})
export class CensoTrasladoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  censoTraslado: CensoTraslado;

  /** Many-To-One Relationships */
  camas: Cama[];
  cama1s: Cama[];
  motivos: Motivo[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private censoTrasladoService: CensoTrasladoService,
    private camaService: CamaService,
    private motivoService: MotivoService,
  ) { }

  ngOnInit() {
    this.camaService.getAll().subscribe(camas => this.camas = camas);
    this.camaService.getAll().subscribe(cama1s => this.cama1s = cama1s);
    this.motivoService.getAll().subscribe(motivos => this.motivos = motivos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.censoTrasladoService.getById(id).subscribe(censoTraslado => this.censoTraslado = censoTraslado);
      }
    });
  }

  save(formValues) {
    this.censoTraslado = formValues;
    this.censoTrasladoService.insert(this.censoTraslado).subscribe(
      (response) => {
        this.router.navigate(['/entities/censo-traslado']);
      }
    );
  }

  update() {
    this.censoTrasladoService.update(this.censoTraslado._id, this.censoTraslado).subscribe(
      (response) => {
        this.router.navigate(['/entities/censo-traslado']);
      }
    );
  }
}
