import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularMaterialModule } from './shared/angular-material.module';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ProductComponent } from '../pages/product/product.component';
import { AgmCoreModule } from '@agm/core';

import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    LayoutRoutingModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: environment.GoogleMapApiKey,
    }),
  ],
  exports: [LayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule {}
