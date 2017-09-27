import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CodigoDiaService } from './codigo-dia.service';
import { CodigoDia } from './codigo-dia.model';
import { absolutePath } from './codigo-dia.route';

@Component({
  selector: 'app-codigo-dia-list',
  templateUrl: './codigo-dia-list.component.html'
})
export class CodigoDiaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() codigoDias: CodigoDia[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private codigoDiaService: CodigoDiaService,
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
        this.codigoDiaService.delete(id).subscribe(response => {
          this.codigoDias = this.codigoDias.filter(codigoDia => codigoDia._id !== id);
        });
      }
    }, (reason) => {});
  }
}
