import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IProduct } from './product';

@Component({
  templateUrl: './app/products/product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm: NgForm;

  errorMessage: string;
  product: IProduct;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Accessing the parent component's resolve data. Getting a reference to it.
    // So both the parent component and this component are pointing to the SAME data
    this.route.parent.data.subscribe(data => {
      if (this.productForm) {
        this.productForm.reset();
      }

      this.product = data['product'];
    });
  }
}
