import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlurComponent } from './components/blur/blur.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/global/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BlurComponent,
    ProductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
