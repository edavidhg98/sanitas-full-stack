import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { RutaLiquidacionService } from './ruta-liquidacion.service';
import { RutaLiquidacion } from './ruta-liquidacion.model';
import { absolutePath } from './ruta-liquidacion.route';

@Component({
  selector: 'app-ruta-liquidacion-list',
  templateUrl: './ruta-liquidacion-list.component.html'
})
export class RutaLiquidacionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() rutaLiquidacions: RutaLiquidacion[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private rutaLiquidacionService: RutaLiquidacionService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  openDeleteModal(content: any, id: string) {
    this.modalService.open(content).result.then((option) => {
      if (option === this.deleteModalOpts.ok) {
        this.rutaLiquidacionService.delete(id).subscribe(response => {
          this.rutaLiquidacions = this.rutaLiquidacions.filter(rutaLiquidacion => rutaLiquidacion._id !== id);
        });
      }
    }, (reason) => {});
  }
}
