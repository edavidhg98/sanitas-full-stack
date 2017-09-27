import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ParFormularioService } from './par-formulario.service';
import { ParFormulario } from './par-formulario.model';
import { absolutePath } from './par-formulario.route';

@Component({
  selector: 'app-par-formulario-list',
  templateUrl: './par-formulario-list.component.html'
})
export class ParFormularioListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() parFormularios: ParFormulario[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private parFormularioService: ParFormularioService,
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
        this.parFormularioService.delete(id).subscribe(response => {
          this.parFormularios = this.parFormularios.filter(parFormulario => parFormulario._id !== id);
        });
      }
    }, (reason) => {});
  }
}
