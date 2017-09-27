import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TipoAnestesiaService } from './tipo-anestesia.service';
import { TipoAnestesia } from './tipo-anestesia.model';
import { absolutePath } from './tipo-anestesia.route';

@Component({
  selector: 'app-tipo-anestesia-list',
  templateUrl: './tipo-anestesia-list.component.html'
})
export class TipoAnestesiaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tipoAnestesias: TipoAnestesia[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tipoAnestesiaService: TipoAnestesiaService,
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
        this.tipoAnestesiaService.delete(id).subscribe(response => {
          this.tipoAnestesias = this.tipoAnestesias.filter(tipoAnestesia => tipoAnestesia._id !== id);
        });
      }
    }, (reason) => {});
  }
}
