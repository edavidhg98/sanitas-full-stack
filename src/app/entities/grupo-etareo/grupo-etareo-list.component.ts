import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { GrupoEtareoService } from './grupo-etareo.service';
import { GrupoEtareo } from './grupo-etareo.model';
import { absolutePath } from './grupo-etareo.route';

@Component({
  selector: 'app-grupo-etareo-list',
  templateUrl: './grupo-etareo-list.component.html'
})
export class GrupoEtareoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() grupoEtareos: GrupoEtareo[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private grupoEtareoService: GrupoEtareoService,
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
        this.grupoEtareoService.delete(id).subscribe(response => {
          this.grupoEtareos = this.grupoEtareos.filter(grupoEtareo => grupoEtareo._id !== id);
        });
      }
    }, (reason) => {});
  }
}
