import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ParOrigenInformacionService } from './par-origen-informacion.service';
import { ParOrigenInformacion } from './par-origen-informacion.model';
import { absolutePath } from './par-origen-informacion.route';

@Component({
  selector: 'app-par-origen-informacion-list',
  templateUrl: './par-origen-informacion-list.component.html'
})
export class ParOrigenInformacionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() parOrigenInformacions: ParOrigenInformacion[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private parOrigenInformacionService: ParOrigenInformacionService,
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
        this.parOrigenInformacionService.delete(id).subscribe(response => {
          this.parOrigenInformacions = this.parOrigenInformacions.filter(parOrigenInformacion => parOrigenInformacion._id !== id);
        });
      }
    }, (reason) => {});
  }
}
