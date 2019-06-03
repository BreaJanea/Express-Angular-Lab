import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() 
export class CartService {
    constructor(private http: HttpClient){}
    getAllItems = () => this.http.get('http://localhost:4200/cart-items');
}