import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NivelCargoService } from './nivel-cargo.service';
import { NivelCargo } from './nivel-cargo.model';
import { absolutePath } from './nivel-cargo.route';

@Component({
  selector: 'app-nivel-cargo-list',
  templateUrl: './nivel-cargo-list.component.html'
})
export class NivelCargoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() nivelCargos: NivelCargo[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private nivelCargoService: NivelCargoService,
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
        this.nivelCargoService.delete(id).subscribe(response => {
          this.nivelCargos = this.nivelCargos.filter(nivelCargo => nivelCargo._id !== id);
        });
      }
    }, (reason) => {});
  }
}
