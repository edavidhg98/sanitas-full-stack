import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CargoAutomaticoService } from './cargo-automatico.service';
import { CargoAutomatico } from './cargo-automatico.model';
import { absolutePath } from './cargo-automatico.route';

@Component({
  selector: 'app-cargo-automatico-list',
  templateUrl: './cargo-automatico-list.component.html'
})
export class CargoAutomaticoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() cargoAutomaticos: CargoAutomatico[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private cargoAutomaticoService: CargoAutomaticoService,
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
        this.cargoAutomaticoService.delete(id).subscribe(response => {
          this.cargoAutomaticos = this.cargoAutomaticos.filter(cargoAutomatico => cargoAutomatico._id !== id);
        });
      }
    }, (reason) => {});
  }
}
