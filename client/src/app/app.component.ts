import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/products';
import { Pagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet Client App';
  products: Product[] = [];

  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>("https://localhost:5001/api/Products?pageSize=50").subscribe({
      next: (response) => {
        this.products = response.data;
        console.log(response);
      }, //what to do next
      error: error => console.log(error), //what to do when there is an error
      complete: () => {
        console.log("Request completed");
        console.log("Extra statements");
      }
    });
  }
}
