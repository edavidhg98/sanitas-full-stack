import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AutorizacionBhService } from './autorizacion-bh.service';
import { AutorizacionBh } from './autorizacion-bh.model';
import { absolutePath } from './autorizacion-bh.route';

@Component({
  selector: 'app-autorizacion-bh-list',
  templateUrl: './autorizacion-bh-list.component.html'
})
export class AutorizacionBhListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() autorizacionBhs: AutorizacionBh[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private autorizacionBhService: AutorizacionBhService,
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
        this.autorizacionBhService.delete(id).subscribe(response => {
          this.autorizacionBhs = this.autorizacionBhs.filter(autorizacionBh => autorizacionBh._id !== id);
        });
      }
    }, (reason) => {});
  }
}
