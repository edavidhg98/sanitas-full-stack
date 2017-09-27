import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ParDependenciaCampoService } from './par-dependencia-campo.service';
import { ParDependenciaCampo } from './par-dependencia-campo.model';
import { absolutePath } from './par-dependencia-campo.route';

@Component({
  selector: 'app-par-dependencia-campo-list',
  templateUrl: './par-dependencia-campo-list.component.html'
})
export class ParDependenciaCampoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() parDependenciaCampos: ParDependenciaCampo[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private parDependenciaCampoService: ParDependenciaCampoService,
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
        this.parDependenciaCampoService.delete(id).subscribe(response => {
          this.parDependenciaCampos = this.parDependenciaCampos.filter(parDependenciaCampo => parDependenciaCampo._id !== id);
        });
      }
    }, (reason) => {});
  }
}
