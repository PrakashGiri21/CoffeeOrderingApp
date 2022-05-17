import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private firestore: AngularFirestore) { }

  form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''),
    completed: new FormControl('')
  })

  createCoffeeOrders(data:any){
    return new Promise<any>((resolve,reject)=>{
      this.firestore
        .collection("coffeeOrders")
        .add(data)
        .then(res => {},err => reject(err));
    })
  }

  getCoffeeOrders(){
    return this.firestore.collection("coffeeOrders").snapshotChanges();
  }
}
