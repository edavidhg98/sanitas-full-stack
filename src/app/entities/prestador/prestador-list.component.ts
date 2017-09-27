import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PrestadorService } from './prestador.service';
import { Prestador } from './prestador.model';
import { absolutePath } from './prestador.route';

@Component({
  selector: 'app-prestador-list',
  templateUrl: './prestador-list.component.html'
})
export class PrestadorListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() prestadors: Prestador[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private prestadorService: PrestadorService,
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
        this.prestadorService.delete(id).subscribe(response => {
          this.prestadors = this.prestadors.filter(prestador => prestador._id !== id);
        });
      }
    }, (reason) => {});
  }
}
