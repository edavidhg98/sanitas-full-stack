import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ReligionService } from './religion.service';
import { Religion } from './religion.model';
import { absolutePath } from './religion.route';

@Component({
  selector: 'app-religion-list',
  templateUrl: './religion-list.component.html'
})
export class ReligionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() religions: Religion[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private religionService: ReligionService,
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
        this.religionService.delete(id).subscribe(response => {
          this.religions = this.religions.filter(religion => religion._id !== id);
        });
      }
    }, (reason) => {});
  }
}
