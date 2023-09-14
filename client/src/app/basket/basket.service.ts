import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Basket, BasketItem, BasketTotals } from '../shared/models/basket';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/models/products';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  baseUrl = environment.apiUrl;

  //create Basket Source observable
  private basketSource = new BehaviorSubject<Basket | null>(null);
  basketSource$ = this.basketSource.asObservable();

  //create Basket Totals observable
  private basketTotalSource = new BehaviorSubject<BasketTotals | null>(null);
  basketTotalSource$ = this.basketTotalSource.asObservable();

  constructor(private http: HttpClient) {}

  getBasket(id: string) {
    return this.http.get<Basket>(this.baseUrl + 'basket?id=' + id).subscribe({
      next: (basket) => {
        this.basketSource.next(basket);
        this.calculateTotals();
      },
    });
  }

  setBasket(basket: Basket) {
    return this.http.post<Basket>(this.baseUrl + 'basket', basket).subscribe({
      next: (basket) => {
        this.basketSource.next(basket);
        this.calculateTotals();
      },
    });
  }

  getCurrentBasketValue() {
    return this.basketSource.value;
  }

  addItemtoBasket(item: Product | BasketItem, quantity = 1) {
    if (this.isProduct(item)) item = this.mapProductItemToBasketItem(item);
    const basket = this.getCurrentBasketValue() ?? this.createBasket();
    basket.items = this.AddOrUpdateItem(basket.items, item, quantity);
    this.setBasket(basket);
  }

  removeItemtoBasket(id: number, quantity = 1) {
    const basket = this.getCurrentBasketValue();
    if (!basket) return;
    const itemToRemove = basket.items.find((x) => x.id === id);
    if (itemToRemove) {
      itemToRemove.quantity -= quantity;
      if (itemToRemove.quantity === 0) {
        basket.items = basket.items.filter((x) => x.id !== id);
      }
      if (basket.items.length > 0) this.setBasket(basket);
      else this.deleteBasket(basket);
    }
  }

  deleteBasket(basket: Basket) {
    //call basket delete
    return this.http.delete(this.baseUrl + 'basket?id=' + basket.id).subscribe({
      next: () => {
        //clean up all observable related to basket
        this.basketSource.next(null);
        this.basketTotalSource.next(null);
        //remove local storage
        localStorage.removeItem('basket_id');
      }
    });
  }

  private AddOrUpdateItem(
    items: BasketItem[],
    itemToAdd: BasketItem,
    quantity: number
  ): BasketItem[] {
    const item = items.find((x) => x.id === itemToAdd.id);
    if (item) item.quantity += quantity;
    else {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    }

    return items;
  }

  private createBasket(): Basket {
    const basket = new Basket();
    //store backet id to browser's local storage
    localStorage.setItem('basket_id', basket.id);
    return basket;
  }

  private mapProductItemToBasketItem(item: Product): BasketItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      quantity: 0,
      pictureUrl: item.pictureUrl,
      brand: item.productBrand,
      type: item.productType,
    };
  }

  private calculateTotals() {
    const basket = this.getCurrentBasketValue();
    if (!basket) return;
    const shipping = 0;
    const subtotal = basket.items.reduce((s, p) => p.price * p.quantity + s, 0);
    const total = shipping + subtotal;
    this.basketTotalSource.next({ shipping, subtotal, total });
  }

  private isProduct(item: Product | BasketItem): item is Product {
    return (item as Product).productBrand !== undefined;
  }
}
