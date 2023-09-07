import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation } from '@angular/router';
import { Product } from 'src/app/shared/models/products';
import { ShopService } from '../shop.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute, // to get the active route 
    private bcService: BreadcrumbService // add Breadcrumb service
    ) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('id'); //gets the parameter
    //+ is a cast operator
    if (id) this.shopService.getProduct(+id).subscribe({
      next: product => {
        this.product = product;
        this.bcService.set('@productDetails', product.name); // set the alias value to product name
      },
      error: error => console.log(error)
    })
  }
}
