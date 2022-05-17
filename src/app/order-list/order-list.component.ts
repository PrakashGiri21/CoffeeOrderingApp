import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  coffeeOrders: any;
  constructor(private ordService: OrderService) { }

  ngOnInit(): void {
    this.ordService.getCoffeeOrders().subscribe({
      next: (res) => {
        console.log('res next',res);
        this.coffeeOrders = res;
      },
      error: (err) => {},
      complete: ()=>{}
    })
  }

}
