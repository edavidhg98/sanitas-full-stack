import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PaisService } from './pais.service';
import { Pais } from './pais.model';
import { absolutePath } from './pais.route';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html'
})
export class PaisListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() paiss: Pais[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private paisService: PaisService,
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
        this.paisService.delete(id).subscribe(response => {
          this.paiss = this.paiss.filter(pais => pais._id !== id);
        });
      }
    }, (reason) => {});
  }
}
