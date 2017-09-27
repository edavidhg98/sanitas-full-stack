import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SalarioService } from './salario.service';
import { Salario } from './salario.model';
import { absolutePath } from './salario.route';

@Component({
  selector: 'app-salario-list',
  templateUrl: './salario-list.component.html'
})
export class SalarioListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() salarios: Salario[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private salarioService: SalarioService,
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
        this.salarioService.delete(id).subscribe(response => {
          this.salarios = this.salarios.filter(salario => salario._id !== id);
        });
      }
    }, (reason) => {});
  }
}
