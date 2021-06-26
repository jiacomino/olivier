import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PictureUtilityComponent } from './utilities/picture-utility/picture-utility.component';
import { PriceSoldUtiltyComponent } from './utilities/price-sold-utilty/price-sold-utilty.component';
import { PriceUtilityComponent } from './utilities/price-utility/price-utility.component';
import { ZoneUtilityComponent } from './utilities/zone-utility/zone-utility.component';

const routes: Routes = [
  { path: '', component: ZoneUtilityComponent },
  { path: 'zone', component: ZoneUtilityComponent, data: { animation: 'ZonePage' } },
  { path: 'price', component: PriceUtilityComponent, data: { animation: 'PricePage' } },
  { path: 'price-sold', component: PriceSoldUtiltyComponent, data: { animation: 'PriceSoldPage' } },
  { path: 'picture', component: PictureUtilityComponent, data: { animation: 'PicturePage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
