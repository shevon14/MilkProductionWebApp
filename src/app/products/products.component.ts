import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  cards = [
    {
      title: 'Item number 1',
      price: '500',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 2',
      price: '600',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 3',
      price: '500',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 4',
      price: '500',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 5',
      price: '500',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 6',
      price: '500',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
  ];

  ngOnInit(): void {
  }

}
