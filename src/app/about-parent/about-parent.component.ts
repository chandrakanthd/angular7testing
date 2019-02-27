import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-parent',
  templateUrl: './about-parent.component.html',
  styleUrls: ['./about-parent.component.scss']
})
export class AboutParentComponent implements OnInit {

  constructor() { }

  products = [];
  title = 'Products';


  productToUpdate: any;
  changeStockValue(p) {
    this.productToUpdate = this.products.find(this.findProducts, [p.id]);
    this.productToUpdate.stock =  p.stock;
  }
  findProducts(p) {
    return p.id === this[0];
  }

  ngOnInit() {
    this.products = this.getProducts();
  }

  getProducts() {
    return [
      { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
      { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
      { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
      { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
      { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
    ];
  }

}
