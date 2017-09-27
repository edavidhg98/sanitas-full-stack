import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CalendarioService } from './calendario.service';
import { Calendario } from './calendario.model';
import { absolutePath } from './calendario.route';

@Component({
  selector: 'app-calendario-list',
  templateUrl: './calendario-list.component.html'
})
export class CalendarioListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() calendarios: Calendario[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private calendarioService: CalendarioService,
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
        this.calendarioService.delete(id).subscribe(response => {
          this.calendarios = this.calendarios.filter(calendario => calendario._id !== id);
        });
      }
    }, (reason) => {});
  }
}
