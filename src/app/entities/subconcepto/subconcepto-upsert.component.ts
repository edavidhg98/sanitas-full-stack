import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SubconceptoService } from './subconcepto.service';
import { Subconcepto } from './subconcepto.model';

import { MotivoService } from '../motivo/motivo.service';
import { Motivo } from '../motivo/motivo.model';
import { TipoAdmisionService } from '../tipo-admision/tipo-admision.service';
import { TipoAdmision } from '../tipo-admision/tipo-admision.model';

@Component({
  selector: 'app-subconcepto-upsert',
  templateUrl: './subconcepto-upsert.component.html'
})
export class SubconceptoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  subconcepto: Subconcepto;

  /** Many-To-One Relationships */
  motivos: Motivo[];
  tipoAdmisions: TipoAdmision[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subconceptoService: SubconceptoService,
    private motivoService: MotivoService,
    private tipoAdmisionService: TipoAdmisionService,
  ) { }

  ngOnInit() {
    this.motivoService.getAll().subscribe(motivos => this.motivos = motivos);
    this.tipoAdmisionService.getAll().subscribe(tipoAdmisions => this.tipoAdmisions = tipoAdmisions);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.subconceptoService.getById(id).subscribe(subconcepto => this.subconcepto = subconcepto);
      }
    });
  }

  save(formValues) {
    this.subconcepto = formValues;
    this.subconceptoService.insert(this.subconcepto).subscribe(
      (response) => {
        this.router.navigate(['/entities/subconcepto']);
      }
    );
  }

  update() {
    this.subconceptoService.update(this.subconcepto._id, this.subconcepto).subscribe(
      (response) => {
        this.router.navigate(['/entities/subconcepto']);
      }
    );
  }
}
