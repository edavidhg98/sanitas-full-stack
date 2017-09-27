import { Component, OnInit, Inject } from '@angular/core';

import { MotivoService } from './motivo.service';
import { Motivo } from './motivo.model';

@Component({
  selector: 'app-motivo',
  template: `
              <div class="container-fluid">
                <app-motivo-list [motivos]="motivos"></app-motivo-list>
              </div>
            `
})
export class MotivoComponent implements OnInit {

  motivos: Motivo[] = [];

  constructor(private motivoService: MotivoService) {

  }

  ngOnInit() {
    this.motivoService.getAll().subscribe(motivos => this.motivos = motivos);
  }
}
