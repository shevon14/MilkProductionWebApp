import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.scss']
})
export class ViewItemsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  elements: any = [
    {id: 1, name: 'rolex watch', price: 'Rs.3000'},
    {id: 2, name: 'head set',  price: 'Rs.1920'},
    {id: 3, name: 'mobile charger', price: 'Rs.600'},
  ];

  headElements = ['ID', 'Product', 'Price', 'Edit' ,'Remove'];

  AddItemClicked(){
    this.router.navigate(['addItems']);
  }

  editItemclicked(){
    this.router.navigate(['editItems']);
  }

}
