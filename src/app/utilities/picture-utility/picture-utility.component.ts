import { Component, OnInit } from '@angular/core';
import { SharedRayonService } from 'src/app/service/shared-rayon.service';

@Component({
  selector: 'app-picture-utility',
  templateUrl: './picture-utility.component.html',
  styleUrls: ['./picture-utility.component.scss']
})
export class PictureUtilityComponent implements OnInit {

  constructor(private rayonService: SharedRayonService) { }

  ngOnInit(): void {
  }

}
