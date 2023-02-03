import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlurComponent } from './components/blur/blur.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { FocusDirective } from './directives/focus.directive';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    BlurComponent,
    ProductComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductsComponent,
    FocusDirective,
    DarkModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
