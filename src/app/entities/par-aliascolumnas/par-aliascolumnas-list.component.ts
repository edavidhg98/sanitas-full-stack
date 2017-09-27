import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ParAliascolumnasService } from './par-aliascolumnas.service';
import { ParAliascolumnas } from './par-aliascolumnas.model';
import { absolutePath } from './par-aliascolumnas.route';

@Component({
  selector: 'app-par-aliascolumnas-list',
  templateUrl: './par-aliascolumnas-list.component.html'
})
export class ParAliascolumnasListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() parAliascolumnass: ParAliascolumnas[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private parAliascolumnasService: ParAliascolumnasService,
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
        this.parAliascolumnasService.delete(id).subscribe(response => {
          this.parAliascolumnass = this.parAliascolumnass.filter(parAliascolumnas => parAliascolumnas._id !== id);
        });
      }
    }, (reason) => {});
  }
}
