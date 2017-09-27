import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PrefijoService } from './prefijo.service';
import { Prefijo } from './prefijo.model';
import { absolutePath } from './prefijo.route';

@Component({
  selector: 'app-prefijo-list',
  templateUrl: './prefijo-list.component.html'
})
export class PrefijoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() prefijos: Prefijo[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private prefijoService: PrefijoService,
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
        this.prefijoService.delete(id).subscribe(response => {
          this.prefijos = this.prefijos.filter(prefijo => prefijo._id !== id);
        });
      }
    }, (reason) => {});
  }
}
