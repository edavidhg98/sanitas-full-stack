import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { InstitucionService } from './institucion.service';
import { Institucion } from './institucion.model';
import { absolutePath } from './institucion.route';

@Component({
  selector: 'app-institucion-list',
  templateUrl: './institucion-list.component.html'
})
export class InstitucionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() institucions: Institucion[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private institucionService: InstitucionService,
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
        this.institucionService.delete(id).subscribe(response => {
          this.institucions = this.institucions.filter(institucion => institucion._id !== id);
        });
      }
    }, (reason) => {});
  }
}
