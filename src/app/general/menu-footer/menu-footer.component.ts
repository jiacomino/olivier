import { Component, HostListener, OnInit } from '@angular/core';
import { SharedRayonService } from 'src/app/service/shared-rayon.service';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.scss']
})
export class MenuFooterComponent implements OnInit {

  itemsFooterMenu: any[];
  currentWindowWidth: number;

  constructor(private rayonService: SharedRayonService) { }

  ngOnInit() {
    this.itemsFooterMenu = this.rayonService.itemsMenu;
    this.currentWindowWidth = window.innerWidth;
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
  }

}
