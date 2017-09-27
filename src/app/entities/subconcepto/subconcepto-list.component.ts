import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SubconceptoService } from './subconcepto.service';
import { Subconcepto } from './subconcepto.model';
import { absolutePath } from './subconcepto.route';

@Component({
  selector: 'app-subconcepto-list',
  templateUrl: './subconcepto-list.component.html'
})
export class SubconceptoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() subconceptos: Subconcepto[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private subconceptoService: SubconceptoService,
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
        this.subconceptoService.delete(id).subscribe(response => {
          this.subconceptos = this.subconceptos.filter(subconcepto => subconcepto._id !== id);
        });
      }
    }, (reason) => {});
  }
}
