import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AchattermineComponent } from './components/achattermine/achattermine.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';
import { AccessoiresdetailsComponent } from './components/product-details/accessoiresdetails/accessoiresdetails.component';
import { MobilierdetailsComponent } from './components/product-details/mobilierdetails/mobilierdetails.component';
import { OutillagedetailsComponent } from './components/product-details/outillagedetails/outillagedetails.component';
import { PlantesdetailsComponent } from './components/product-details/plantesdetails/plantesdetails.component';
import { AccessoiresComponent } from './components/product/accessoires/accessoires.component';
import { MobilierComponent } from './components/product/mobilier/mobilier.component';
import { OutillageComponent } from './components/product/outillage/outillage.component';
import { PlantesComponent } from './components/product/plantes/plantes.component';
import { ProfilUserDisplayComponent } from './components/profiluser/profiluser-display/profiluser-display.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'cart', component: CartComponent},
  {path: 'form', component: RegisterComponent},
  {path: 'category', component:CategoryComponent},
  { path: 'product/accessoires', component: AccessoiresComponent},
  { path: 'product/mobilier', component: MobilierComponent},
  { path: 'product/plantes', component: PlantesComponent},
  { path: 'product/outillage', component: OutillageComponent},
  { path: "achatterminer", component: AchattermineComponent},
  { path: "confirmation", component:ConfirmationComponent},
  { path: "confirmation/:firstname/:lastname/:email/:adr/:tel", component:ConfirmationComponent},
  { path: 'profiluser/profiluser-display', component: ProfilUserDisplayComponent},
  { path: 'product/outillage/:id', component: OutillagedetailsComponent},    //ajout d'une route pour la catégorie OUTILLAGE vers les détails OUTILLAGE!!
  { path: 'product/mobilier/:id', component: MobilierdetailsComponent},       //ajout d'une route pour la catégorie MOBILIER vers les détails MOBILIER!!
  { path: 'product/plantes/:id', component: PlantesdetailsComponent},         //ajout d'une route pour la catégorie PLANTES vers les détails PLANTES!!
  { path: 'product/accessoires/:id', component: AccessoiresdetailsComponent}, //ajout d'une route pour la catégorie ACCESSOIRES vers les détails ACCESSOIRES!!
  {path: 'profiluser/contact', component: ContactComponent} 
 ]
@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,RouterOutlet],
  exports: [RouterModule,CommonModule]
})
export class AppRoutingRoutingModule { }