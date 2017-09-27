import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CarnetService } from './carnet.service';
import { Carnet } from './carnet.model';
import { absolutePath } from './carnet.route';

@Component({
  selector: 'app-carnet-list',
  templateUrl: './carnet-list.component.html'
})
export class CarnetListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() carnets: Carnet[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private carnetService: CarnetService,
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
        this.carnetService.delete(id).subscribe(response => {
          this.carnets = this.carnets.filter(carnet => carnet._id !== id);
        });
      }
    }, (reason) => {});
  }
}
