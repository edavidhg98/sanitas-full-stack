import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TriageService } from './triage.service';
import { Triage } from './triage.model';
import { absolutePath } from './triage.route';

@Component({
  selector: 'app-triage-list',
  templateUrl: './triage-list.component.html'
})
export class TriageListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() triages: Triage[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private triageService: TriageService,
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
        this.triageService.delete(id).subscribe(response => {
          this.triages = this.triages.filter(triage => triage._id !== id);
        });
      }
    }, (reason) => {});
  }
}
