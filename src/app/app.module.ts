import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './general/header/header.component';
import { LayoutComponent } from './general/layout/layout.component';
import { ProductComponent } from './general/product/product.component';
import { MenuFooterComponent } from './general/menu-footer/menu-footer.component';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { PictureUtilityComponent } from './utilities/picture-utility/picture-utility.component';
import { PriceSoldUtiltyComponent } from './utilities/price-sold-utilty/price-sold-utilty.component';
import { PriceUtilityComponent } from './utilities/price-utility/price-utility.component';
import { ZoneUtilityComponent } from './utilities/zone-utility/zone-utility.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    ProductComponent,
    MenuFooterComponent,
    PictureUtilityComponent,
    PriceSoldUtiltyComponent,
    PriceUtilityComponent,
    ZoneUtilityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,

    // Material
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
