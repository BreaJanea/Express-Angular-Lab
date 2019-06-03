import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.services';

interface Items {
  id: number;
  product: string;
  price: number;
  quantity: number;
}

interface ApiData {
  data: Items[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  list: Items[];  
  constructor(private api: CartService) {}
ngOnInit() {
    this.api.getAllItems().subscribe((data: ApiData) => {
      this.list = data.data;
      
    });
  }

}
