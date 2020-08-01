import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  quantity: number = 1;
  unitprice : number = 100;
  totalprice : number = this.unitprice;

  butterProducts : any;
  milkProducts : any;
  cheeseProducts : any;
  yougurdProducts : any;

  img : string = 'https://lh3.googleusercontent.com/proxy/HCCuzplxMMWlZrOoakxIclak8P21Vfb8sipDDHy7uFMtU-VRA0a9hDhpMg6OPzicJJz9wy4xw-rGFL87T9Kamdmm2uCKva4ia0_aG7Dh2LMpsDPx7CPlNyYiC1dVVYEqs4jB1IT8MOiUacC-zPzc3yzmssApcqVXkoxvQnuzklJzpUY';

  cards = [
    {
      title: 'Item number 1',
      price: '500',
      img: 'https://supersavings.lk/wp-content/uploads/2020/05/al-rayan-milk.jpg'
    },
    {
      title: 'Item number 2',
      price: '600',
      img: 'https://supersavings.lk/wp-content/uploads/2020/05/al-rayan-milk.jpg'
    },
    {
      title: 'Item number 3',
      price: '500',
      img: 'https://az836796.vo.msecnd.net/media/image/product/en/large/0006810000345.jpg'
    },
    {
      title: 'Item number 4',
      price: '500',
      img: 'https://www.waangoo.com/content/images/thumbs/0020211_milky-mist-unsalted-butter_600.jpeg'
    },
    {
      title: 'Item number 5',
      price: '500',
      img: 'https://images-na.ssl-images-amazon.com/images/I/61vOGGT03dL._SY606_.jpg'
    },
    {
      title: 'Item number 6',
      price: '500',
      img: 'https://az836796.vo.msecnd.net/media/image/product/en/large/0006810000345.jpg'
    },
  ];

  ngOnInit(): void {
  }

  minusBtnClicked(){
    if(this.quantity == 1){
        //can't be minus
    } else {
      this.quantity = this.quantity - 1;
      this.totalprice =  this.unitprice * this.quantity;
    }
  }

  plusBtnClicked(){
    this.quantity = this.quantity + 1 ;
    this.totalprice =  this.unitprice * this.quantity;
  }

}
