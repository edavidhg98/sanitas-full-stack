import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CiudadService } from './ciudad.service';
import { Ciudad } from './ciudad.model';
import { absolutePath } from './ciudad.route';

@Component({
  selector: 'app-ciudad-list',
  templateUrl: './ciudad-list.component.html'
})
export class CiudadListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() ciudads: Ciudad[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private ciudadService: CiudadService,
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
        this.ciudadService.delete(id).subscribe(response => {
          this.ciudads = this.ciudads.filter(ciudad => ciudad._id !== id);
        });
      }
    }, (reason) => {});
  }
}
