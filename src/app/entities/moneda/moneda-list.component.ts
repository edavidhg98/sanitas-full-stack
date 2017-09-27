import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MonedaService } from './moneda.service';
import { Moneda } from './moneda.model';
import { absolutePath } from './moneda.route';

@Component({
  selector: 'app-moneda-list',
  templateUrl: './moneda-list.component.html'
})
export class MonedaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() monedas: Moneda[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private monedaService: MonedaService,
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
        this.monedaService.delete(id).subscribe(response => {
          this.monedas = this.monedas.filter(moneda => moneda._id !== id);
        });
      }
    }, (reason) => {});
  }
}
