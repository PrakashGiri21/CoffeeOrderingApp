import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
/* import {FormGroup,FormControl} from '@angular/forms'; */


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  coffees = ["Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];
  customerName:string ="";
  orderNumber:number = 0;
  coffeeOrders:any = [];
  completed:boolean = false;

  /* form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''),
    completed: new FormControl('')
  }) */

  form: any;

  constructor(private ordService:OrderService) {
    this.form = this.ordService.form;
   }

  ngOnInit(): void {
  }

  addCoffee(cf:string){
    this.coffeeOrders.push(cf);
  }

  removeCoffee(cf:string){
    this.coffeeOrders.pop(cf);
    //this.coffeeOrders = this.coffeeOrders.filter((el:any) => (el != cf));
  }

  onSubmit(){
    
    //creating form data
    this.ordService.form.value.customerName = this.customerName;
    this.ordService.form.value.orderNumber = this.orderNumber;
    this.ordService.form.value.coffeeOrder = this.coffeeOrders;
    this.ordService.form.value.completed = this.completed;
    
    console.log("form submitted",this.ordService.form.value);
    
    let data = this.ordService.form.value;

    this.ordService.createCoffeeOrders(data)
      .then(res => {
        console.log('test res:', res);
      })
    ;
    
  }

}
