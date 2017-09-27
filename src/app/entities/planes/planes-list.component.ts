import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PlanesService } from './planes.service';
import { Planes } from './planes.model';
import { absolutePath } from './planes.route';

@Component({
  selector: 'app-planes-list',
  templateUrl: './planes-list.component.html'
})
export class PlanesListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() planess: Planes[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private planesService: PlanesService,
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
        this.planesService.delete(id).subscribe(response => {
          this.planess = this.planess.filter(planes => planes._id !== id);
        });
      }
    }, (reason) => {});
  }
}
