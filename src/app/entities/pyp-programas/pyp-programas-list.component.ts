import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PypProgramasService } from './pyp-programas.service';
import { PypProgramas } from './pyp-programas.model';
import { absolutePath } from './pyp-programas.route';

@Component({
  selector: 'app-pyp-programas-list',
  templateUrl: './pyp-programas-list.component.html'
})
export class PypProgramasListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() pypProgramass: PypProgramas[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private pypProgramasService: PypProgramasService,
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
        this.pypProgramasService.delete(id).subscribe(response => {
          this.pypProgramass = this.pypProgramass.filter(pypProgramas => pypProgramas._id !== id);
        });
      }
    }, (reason) => {});
  }
}
