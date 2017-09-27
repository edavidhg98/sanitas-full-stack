import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ValeElectronicoService } from './vale-electronico.service';
import { ValeElectronico } from './vale-electronico.model';
import { absolutePath } from './vale-electronico.route';

@Component({
  selector: 'app-vale-electronico-list',
  templateUrl: './vale-electronico-list.component.html'
})
export class ValeElectronicoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() valeElectronicos: ValeElectronico[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private valeElectronicoService: ValeElectronicoService,
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
        this.valeElectronicoService.delete(id).subscribe(response => {
          this.valeElectronicos = this.valeElectronicos.filter(valeElectronico => valeElectronico._id !== id);
        });
      }
    }, (reason) => {});
  }
}
