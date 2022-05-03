import { ViewComponent } from './my-account/view/view.component';
import { SavedComponent } from './my-account/saved/saved.component';
import { OverwiewComponent } from './my-account/overwiew/overwiew.component';
import { OrderComponent } from './my-account/order/order.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CartComponent } from './cart/cart.component';
import { ProductOneComponent } from './product-one/product-one.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AccountComponent } from './account/account.component';
import { OtherComponent } from './shop/other/other.component';
import { CarComponent } from './shop/car/car.component';
import { SportComponent } from './shop/sport/sport.component';
import { ComputerComponent } from './shop/computer/computer.component';
import { OfficeComponent } from './shop/office/office.component';
import { ElectronesComponent } from './shop/electrones/electrones.component';
import { BabyComponent } from './shop/baby/baby.component';
import { MobileComponent } from './shop/mobile/mobile.component';
import { HealthComponent } from './shop/health/health.component';
import { FoodComponent } from './shop/super-market/food/food.component';
import { SuperMaketComponent } from './shop/super-maket/super-maket.component';
import { HelpComponent } from './help/help.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './shop/game/game.component';
import { ResolverService } from './resolver.service';

const routes: Routes = [
  {path:'',component:HomeComponent, children:
 [ {path:'superMarket',component:SuperMaketComponent},
   {path:'fashion',component:FoodComponent},
   {path:'health',component:HealthComponent },
   {path:'mobile',component:MobileComponent},
   {path:'baby',component:BabyComponent},
   {path:'electronics',component:ElectronesComponent},
   {path:'office',component:OfficeComponent},
   {path:'computer',component:ComputerComponent},
   {path:'sport',component:SportComponent},
   {path:'game',component:GameComponent},
   {path:'car',component:CarComponent},
   {path:'other',component:OtherComponent}
 ]
},{
  path:'sign',component:SignInComponent
},
{
  path:'help',component:HelpComponent
},
{
  path:'account',component:AccountComponent}
  ,{path:'my-account',component:MyAccountComponent,children:[
  {path:'overview',component:OverwiewComponent},
  {path:'order',component:OrderComponent},
  {path:'save',component:SavedComponent},
  {path:'view',component:ViewComponent}
]},
{path:'contact',component:ContactUsComponent},{path:'cart',component:CartComponent},
{path:':id',component:ProductOneComponent,resolve:[ResolverService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
