import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HomologacionServiciosAgfaService } from './homologacion-servicios-agfa.service';
import { HomologacionServiciosAgfa } from './homologacion-servicios-agfa.model';
import { absolutePath } from './homologacion-servicios-agfa.route';

@Component({
  selector: 'app-homologacion-servicios-agfa-list',
  templateUrl: './homologacion-servicios-agfa-list.component.html'
})
export class HomologacionServiciosAgfaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() homologacionServiciosAgfas: HomologacionServiciosAgfa[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private homologacionServiciosAgfaService: HomologacionServiciosAgfaService,
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
        this.homologacionServiciosAgfaService.delete(id).subscribe(response => {
          this.homologacionServiciosAgfas = this.homologacionServiciosAgfas.filter(homologacionServiciosAgfa => homologacionServiciosAgfa._id !== id);
        });
      }
    }, (reason) => {});
  }
}
