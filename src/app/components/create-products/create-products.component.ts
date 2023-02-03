import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ProductsService} from '../../services/products.service'
import {ModalService} from '../../services/modal.service'

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent {

  form = new FormGroup({

    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  constructor(
    private productService: ProductsService,
    private modalService: ModalService
  ) {
  }

  submit() {
    // this.productService.create({
    //   title: this.form.value.title as string,
    //   price: 13.5,
    //   description: 'lorem ipsum set',
    //   image: 'https://i.pravatar.cc',
    //   category: 'electronic',
    //   rating: {
    //     rate: 42,
    //     count: 1
    //   }
    // }).subscribe(() => {
    //   this.modalService.close()
    // })
  }


}
