import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ParFormatoCampoService } from './par-formato-campo.service';
import { ParFormatoCampo } from './par-formato-campo.model';
import { absolutePath } from './par-formato-campo.route';

@Component({
  selector: 'app-par-formato-campo-list',
  templateUrl: './par-formato-campo-list.component.html'
})
export class ParFormatoCampoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() parFormatoCampos: ParFormatoCampo[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private parFormatoCampoService: ParFormatoCampoService,
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
        this.parFormatoCampoService.delete(id).subscribe(response => {
          this.parFormatoCampos = this.parFormatoCampos.filter(parFormatoCampo => parFormatoCampo._id !== id);
        });
      }
    }, (reason) => {});
  }
}
