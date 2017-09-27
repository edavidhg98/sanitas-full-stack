import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CitaRetrasoService } from './cita-retraso.service';
import { CitaRetraso } from './cita-retraso.model';
import { absolutePath } from './cita-retraso.route';

@Component({
  selector: 'app-cita-retraso-list',
  templateUrl: './cita-retraso-list.component.html'
})
export class CitaRetrasoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() citaRetrasos: CitaRetraso[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private citaRetrasoService: CitaRetrasoService,
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
        this.citaRetrasoService.delete(id).subscribe(response => {
          this.citaRetrasos = this.citaRetrasos.filter(citaRetraso => citaRetraso._id !== id);
        });
      }
    }, (reason) => {});
  }
}
