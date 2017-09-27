import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ParTipoCampoService } from './par-tipo-campo.service';
import { ParTipoCampo } from './par-tipo-campo.model';
import { absolutePath } from './par-tipo-campo.route';

@Component({
  selector: 'app-par-tipo-campo-list',
  templateUrl: './par-tipo-campo-list.component.html'
})
export class ParTipoCampoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() parTipoCampos: ParTipoCampo[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private parTipoCampoService: ParTipoCampoService,
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
        this.parTipoCampoService.delete(id).subscribe(response => {
          this.parTipoCampos = this.parTipoCampos.filter(parTipoCampo => parTipoCampo._id !== id);
        });
      }
    }, (reason) => {});
  }
}
