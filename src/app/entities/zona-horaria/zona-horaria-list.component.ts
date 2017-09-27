import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ZonaHorariaService } from './zona-horaria.service';
import { ZonaHoraria } from './zona-horaria.model';
import { absolutePath } from './zona-horaria.route';

@Component({
  selector: 'app-zona-horaria-list',
  templateUrl: './zona-horaria-list.component.html'
})
export class ZonaHorariaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() zonaHorarias: ZonaHoraria[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private zonaHorariaService: ZonaHorariaService,
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
        this.zonaHorariaService.delete(id).subscribe(response => {
          this.zonaHorarias = this.zonaHorarias.filter(zonaHoraria => zonaHoraria._id !== id);
        });
      }
    }, (reason) => {});
  }
}
