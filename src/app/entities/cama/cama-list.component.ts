import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CamaService } from './cama.service';
import { Cama } from './cama.model';
import { absolutePath } from './cama.route';

@Component({
  selector: 'app-cama-list',
  templateUrl: './cama-list.component.html'
})
export class CamaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() camas: Cama[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private camaService: CamaService,
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
        this.camaService.delete(id).subscribe(response => {
          this.camas = this.camas.filter(cama => cama._id !== id);
        });
      }
    }, (reason) => {});
  }
}
