import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { VacunasService } from './vacunas.service';
import { Vacunas } from './vacunas.model';
import { absolutePath } from './vacunas.route';

@Component({
  selector: 'app-vacunas-list',
  templateUrl: './vacunas-list.component.html'
})
export class VacunasListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() vacunass: Vacunas[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private vacunasService: VacunasService,
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
        this.vacunasService.delete(id).subscribe(response => {
          this.vacunass = this.vacunass.filter(vacunas => vacunas._id !== id);
        });
      }
    }, (reason) => {});
  }
}
