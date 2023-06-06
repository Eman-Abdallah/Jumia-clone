import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HelpComponent } from './help/help.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopComponent } from './shop/shop.component';
import { SuperMaketComponent } from './shop/super-maket/super-maket.component';
import { FoodComponent } from './shop/super-market/food/food.component';
import { HealthComponent } from './shop/health/health.component';
import { MobileComponent } from './shop/mobile/mobile.component';
import { BabyComponent } from './shop/baby/baby.component';
import { ElectronesComponent } from './shop/electrones/electrones.component';
import { OfficeComponent } from './shop/office/office.component';
import { ComputerComponent } from './shop/computer/computer.component';
import { SportComponent } from './shop/sport/sport.component';
import { GameComponent } from './shop/game/game.component';
import { CarComponent } from './shop/car/car.component';
import { OtherComponent } from './shop/other/other.component';
import { AccountComponent } from './account/account.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductOneComponent } from './product-one/product-one.component';
import { CartComponent } from './cart/cart.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { OrderComponent } from './my-account/order/order.component';
import { OverwiewComponent } from './my-account/overwiew/overwiew.component';
import { SavedComponent } from './my-account/saved/saved.component';
import { ViewComponent } from './my-account/view/view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditAddressComponent } from './my-account/edit-address/edit-address.component';
import { InboxComponent } from './my-account/inbox/inbox.component';
import { VoucherComponent } from './my-account/voucher/voucher.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SignInComponent,
    HelpComponent,
    ShopComponent,
    SuperMaketComponent,
    FoodComponent,
    HealthComponent,
    MobileComponent,
    BabyComponent,
    ElectronesComponent,
    OfficeComponent,
    ComputerComponent,
    SportComponent,
    GameComponent,
    CarComponent,
    OtherComponent,
    AccountComponent,
    ContactUsComponent,
    ProductOneComponent,
    CartComponent,
    MyAccountComponent,
    OrderComponent,
    OverwiewComponent,
    SavedComponent,
    ViewComponent,
    EditAddressComponent,
    InboxComponent,
    VoucherComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
NgbCollapseModule,
ReactiveFormsModule,
HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
