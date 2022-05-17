import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import {OrderService} from './shared/order.service';
import {ReactiveFormsModule} from '@angular/forms';

/* Import the packages you installed earlier and the environment.ts file into your app.module.ts.
You’ll need to initialize the AngularFireModule with the firebaseConfig that you’ve just done the set up for */

import {environment} from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';

// 1. Import the libs you need
/* import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth'; */

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
