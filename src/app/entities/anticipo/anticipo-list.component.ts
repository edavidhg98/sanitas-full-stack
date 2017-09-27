import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AnticipoService } from './anticipo.service';
import { Anticipo } from './anticipo.model';
import { absolutePath } from './anticipo.route';

@Component({
  selector: 'app-anticipo-list',
  templateUrl: './anticipo-list.component.html'
})
export class AnticipoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() anticipos: Anticipo[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private anticipoService: AnticipoService,
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
        this.anticipoService.delete(id).subscribe(response => {
          this.anticipos = this.anticipos.filter(anticipo => anticipo._id !== id);
        });
      }
    }, (reason) => {});
  }
}
