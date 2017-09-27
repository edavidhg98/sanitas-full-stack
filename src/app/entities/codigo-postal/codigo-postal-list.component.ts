import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CodigoPostalService } from './codigo-postal.service';
import { CodigoPostal } from './codigo-postal.model';
import { absolutePath } from './codigo-postal.route';

@Component({
  selector: 'app-codigo-postal-list',
  templateUrl: './codigo-postal-list.component.html'
})
export class CodigoPostalListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() codigoPostals: CodigoPostal[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private codigoPostalService: CodigoPostalService,
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
        this.codigoPostalService.delete(id).subscribe(response => {
          this.codigoPostals = this.codigoPostals.filter(codigoPostal => codigoPostal._id !== id);
        });
      }
    }, (reason) => {});
  }
}
