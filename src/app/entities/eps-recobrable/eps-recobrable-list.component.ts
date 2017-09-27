import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EpsRecobrableService } from './eps-recobrable.service';
import { EpsRecobrable } from './eps-recobrable.model';
import { absolutePath } from './eps-recobrable.route';

@Component({
  selector: 'app-eps-recobrable-list',
  templateUrl: './eps-recobrable-list.component.html'
})
export class EpsRecobrableListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() epsRecobrables: EpsRecobrable[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private epsRecobrableService: EpsRecobrableService,
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
        this.epsRecobrableService.delete(id).subscribe(response => {
          this.epsRecobrables = this.epsRecobrables.filter(epsRecobrable => epsRecobrable._id !== id);
        });
      }
    }, (reason) => {});
  }
}
