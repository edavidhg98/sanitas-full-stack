import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ReligionService } from './religion.service';
import { Religion } from './religion.model';


@Component({
  selector: 'app-religion-upsert',
  templateUrl: './religion-upsert.component.html'
})
export class ReligionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  religion: Religion;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private religionService: ReligionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.religionService.getById(id).subscribe(religion => this.religion = religion);
      }
    });
  }

  save(formValues) {
    this.religion = formValues;
    this.religionService.insert(this.religion).subscribe(
      (response) => {
        this.router.navigate(['/entities/religion']);
      }
    );
  }

  update() {
    this.religionService.update(this.religion._id, this.religion).subscribe(
      (response) => {
        this.router.navigate(['/entities/religion']);
      }
    );
  }
}
