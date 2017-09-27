import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SustitutosService } from './sustitutos.service';
import { Sustitutos } from './sustitutos.model';
import { absolutePath } from './sustitutos.route';

@Component({
  selector: 'app-sustitutos-list',
  templateUrl: './sustitutos-list.component.html'
})
export class SustitutosListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() sustitutoss: Sustitutos[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private sustitutosService: SustitutosService,
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
        this.sustitutosService.delete(id).subscribe(response => {
          this.sustitutoss = this.sustitutoss.filter(sustitutos => sustitutos._id !== id);
        });
      }
    }, (reason) => {});
  }
}
