import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DiagnosticoService } from './diagnostico.service';
import { Diagnostico } from './diagnostico.model';
import { absolutePath } from './diagnostico.route';

@Component({
  selector: 'app-diagnostico-list',
  templateUrl: './diagnostico-list.component.html'
})
export class DiagnosticoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() diagnosticos: Diagnostico[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private diagnosticoService: DiagnosticoService,
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
        this.diagnosticoService.delete(id).subscribe(response => {
          this.diagnosticos = this.diagnosticos.filter(diagnostico => diagnostico._id !== id);
        });
      }
    }, (reason) => {});
  }
}
