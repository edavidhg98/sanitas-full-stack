import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LocalidadService } from './localidad.service';
import { Localidad } from './localidad.model';
import { absolutePath } from './localidad.route';

@Component({
  selector: 'app-localidad-list',
  templateUrl: './localidad-list.component.html'
})
export class LocalidadListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() localidads: Localidad[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private localidadService: LocalidadService,
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
        this.localidadService.delete(id).subscribe(response => {
          this.localidads = this.localidads.filter(localidad => localidad._id !== id);
        });
      }
    }, (reason) => {});
  }
}
