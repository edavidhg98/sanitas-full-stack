import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SucursalService } from './sucursal.service';
import { Sucursal } from './sucursal.model';
import { absolutePath } from './sucursal.route';

@Component({
  selector: 'app-sucursal-list',
  templateUrl: './sucursal-list.component.html'
})
export class SucursalListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() sucursals: Sucursal[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private sucursalService: SucursalService,
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
        this.sucursalService.delete(id).subscribe(response => {
          this.sucursals = this.sucursals.filter(sucursal => sucursal._id !== id);
        });
      }
    }, (reason) => {});
  }
}
