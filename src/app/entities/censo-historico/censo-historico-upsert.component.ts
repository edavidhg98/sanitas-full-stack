import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CensoHistoricoService } from './censo-historico.service';
import { CensoHistorico } from './censo-historico.model';

import { CamaService } from '../cama/cama.service';
import { Cama } from '../cama/cama.model';
import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-censo-historico-upsert',
  templateUrl: './censo-historico-upsert.component.html'
})
export class CensoHistoricoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  censoHistorico: CensoHistorico;

  /** Many-To-One Relationships */
  camas: Cama[];
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private censoHistoricoService: CensoHistoricoService,
    private camaService: CamaService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.camaService.getAll().subscribe(camas => this.camas = camas);
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.censoHistoricoService.getById(id).subscribe(censoHistorico => this.censoHistorico = censoHistorico);
      }
    });
  }

  save(formValues) {
    this.censoHistorico = formValues;
    this.censoHistoricoService.insert(this.censoHistorico).subscribe(
      (response) => {
        this.router.navigate(['/entities/censo-historico']);
      }
    );
  }

  update() {
    this.censoHistoricoService.update(this.censoHistorico._id, this.censoHistorico).subscribe(
      (response) => {
        this.router.navigate(['/entities/censo-historico']);
      }
    );
  }
}
