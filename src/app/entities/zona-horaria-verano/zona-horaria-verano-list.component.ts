import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ZonaHorariaVeranoService } from './zona-horaria-verano.service';
import { ZonaHorariaVerano } from './zona-horaria-verano.model';
import { absolutePath } from './zona-horaria-verano.route';

@Component({
  selector: 'app-zona-horaria-verano-list',
  templateUrl: './zona-horaria-verano-list.component.html'
})
export class ZonaHorariaVeranoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() zonaHorariaVeranos: ZonaHorariaVerano[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private zonaHorariaVeranoService: ZonaHorariaVeranoService,
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
        this.zonaHorariaVeranoService.delete(id).subscribe(response => {
          this.zonaHorariaVeranos = this.zonaHorariaVeranos.filter(zonaHorariaVerano => zonaHorariaVerano._id !== id);
        });
      }
    }, (reason) => {});
  }
}
