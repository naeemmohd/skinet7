import { Component, Input } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { Product } from 'src/app/shared/models/products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product?: Product;

  constructor(private basketService: BasketService) {}

  AddItemToBasket(){
    // checks if products is not null
    this.product && this.basketService.addItemtoBasket(this.product);
  }
}
