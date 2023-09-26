import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from 'src/app/basket/basket.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  //initialize values of handling quanity
  quantity = 1;
  quantityInBasket = 0;

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute, // to get the active route
    private bcService: BreadcrumbService, // add Breadcrumb service
    private basketService: BasketService // add Basket Service
  ) {
    //to fix the product title header showing ID ore previus header
    // during init, it will be blank, once the data is received then
    // we sre setting it to product name on line 36
    this.bcService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('id'); //gets the parameter
    //+ is a cast operator
    if (id)
      this.shopService.getProduct(+id).subscribe({
        next: (product) => {
          this.product = product;
          this.bcService.set('@productDetails', product.name); // set the alias value to product name

          // to make sure you dont need to unsubscribe after subscribing the service
          // call Basket Service to get the quanity of the item
          this.basketService.basketSource$.pipe(take(1)).subscribe({
            next : basket => {
              const item = basket?.items.find(x => x.id === +id);
              //if item exists in basket
              if(item){
                //set quantity and quantityInBasket as item's qunaity
                this.quantity = item.quantity;
                this.quantityInBasket = item.quantity;
              }
            }
          });
        },
        error: (error) => console.log(error),
      });
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    this.quantity--;
  }

  updateBasket(){
    if(this.product){
      //if the quanity is greater than the qunaity in basket
      if(this.quantity > this.quantityInBasket){
        //then add proper qunatity to basket
        const itemsToAdd = this.quantity - this.quantityInBasket;
        this.quantityInBasket += itemsToAdd;
        this.basketService.addItemToBasket(this.product, itemsToAdd);
      } else{
        const itemstoRemove = this.quantityInBasket - this.quantity;
        this.quantityInBasket -= itemstoRemove;
        this.basketService.removeItemFromBasket(this.product.id, itemstoRemove);
      }
    }
  }

  //a getter function to control the button text
  get buttonText(){
    return this.quantityInBasket === 0 ? 'Add to Basket' : 'Update Basket';
  }
}
