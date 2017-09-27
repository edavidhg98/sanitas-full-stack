import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MotivoService } from './motivo.service';
import { Motivo } from './motivo.model';
import { absolutePath } from './motivo.route';

@Component({
  selector: 'app-motivo-list',
  templateUrl: './motivo-list.component.html'
})
export class MotivoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() motivos: Motivo[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private motivoService: MotivoService,
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
        this.motivoService.delete(id).subscribe(response => {
          this.motivos = this.motivos.filter(motivo => motivo._id !== id);
        });
      }
    }, (reason) => {});
  }
}
