import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: "Manzana",
      price: 1.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: "Pan",
      price: 3.5,
      quantity: 8,
      completed: true
    },
    {
      id: 2,
      title: "Barra de queso",
      price: 1.5,
      quantity: 4,
      completed: false
    }
  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItem(item:Item) {
    this.items.unshift(item);
  }
}