import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TiposValoresService } from './tipos-valores.service';
import { TiposValores } from './tipos-valores.model';
import { absolutePath } from './tipos-valores.route';

@Component({
  selector: 'app-tipos-valores-list',
  templateUrl: './tipos-valores-list.component.html'
})
export class TiposValoresListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tiposValoress: TiposValores[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tiposValoresService: TiposValoresService,
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
        this.tiposValoresService.delete(id).subscribe(response => {
          this.tiposValoress = this.tiposValoress.filter(tiposValores => tiposValores._id !== id);
        });
      }
    }, (reason) => {});
  }
}
