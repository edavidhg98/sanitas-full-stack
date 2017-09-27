import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ConsumoSoatOtraIpsService } from './consumo-soat-otra-ips.service';
import { ConsumoSoatOtraIps } from './consumo-soat-otra-ips.model';
import { absolutePath } from './consumo-soat-otra-ips.route';

@Component({
  selector: 'app-consumo-soat-otra-ips-list',
  templateUrl: './consumo-soat-otra-ips-list.component.html'
})
export class ConsumoSoatOtraIpsListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() consumoSoatOtraIpss: ConsumoSoatOtraIps[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private consumoSoatOtraIpsService: ConsumoSoatOtraIpsService,
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
        this.consumoSoatOtraIpsService.delete(id).subscribe(response => {
          this.consumoSoatOtraIpss = this.consumoSoatOtraIpss.filter(consumoSoatOtraIps => consumoSoatOtraIps._id !== id);
        });
      }
    }, (reason) => {});
  }
}
