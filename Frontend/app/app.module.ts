import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { AchattermineComponent } from './components/achattermine/achattermine.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AccessoiresComponent } from './components/product/accessoires/accessoires.component';
import { MobilierComponent } from './components/product/mobilier/mobilier.component';
import { OutillageComponent } from './components/product/outillage/outillage.component';
import { PlantesComponent } from './components/product/plantes/plantes.component';
import { ProduitresultComponent } from './components/produitresult/produitresult.component';
import { ProfilUserDisplayComponent } from './components/profiluser/profiluser-display/profiluser-display.component';
import { ProfiluserRoutingModule } from './components/profiluser/profiluser-routing.module';
import { ProfilUserComponent } from './components/profiluser/profiluser.component';
import { ProfiluserModule } from './components/profiluser/profiluser.module';
import { RegisterComponent } from './components/register/register.component';
import { StockEpuiseDirective } from './directives/stockEpuise.directive';
import { AuthService } from './services/auth-service.service';
import { CategoryService } from './services/categorie.service';
import { CategoriesmockService } from './services/categoriesmock.service';
import { PanierService } from './services/panier.service';
import { OutillagedetailsComponent } from './components/product-details/outillagedetails/outillagedetails.component';
import { MobilierdetailsComponent } from './components/product-details/mobilierdetails/mobilierdetails.component';
import { PlantesdetailsComponent } from './components/product-details/plantesdetails/plantesdetails.component';
import { AccessoiresdetailsComponent } from './components/product-details/accessoiresdetails/accessoiresdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [],
  
  imports: [
    CommonModule,RouterModule,AppComponent,NavbarComponent, HomeComponent,ProfiluserModule, FormsModule, ReactiveFormsModule,
    RegisterComponent,ConnexionComponent,CartComponent,AdminComponent,OutillageComponent,MobilierComponent,PlantesComponent,AccessoiresComponent,
    AchattermineComponent,ConfirmationComponent,ProduitresultComponent,CategoryComponent, ProfilUserComponent,BrowserAnimationsModule,
    TableModule,ProfiluserRoutingModule,ProfiluserModule,ProductDetailsComponent,OutillagedetailsComponent,MobilierdetailsComponent,PlantesdetailsComponent,AccessoiresdetailsComponent,StockEpuiseDirective,ContactComponent,ProfilUserDisplayComponent],
  
  exports: [HomeComponent,AppComponent,NavbarComponent,RegisterComponent,FormsModule, ReactiveFormsModule,StockEpuiseDirective,
    ConnexionComponent,CartComponent,AdminComponent,OutillageComponent,MobilierComponent,PlantesComponent,AccessoiresComponent,
    AchattermineComponent,ConfirmationComponent,ProduitresultComponent,CategoryComponent, ProfilUserDisplayComponent,ProductDetailsComponent,OutillagedetailsComponent,MobilierdetailsComponent,PlantesdetailsComponent,AccessoiresdetailsComponent,ContactComponent],
    
  providers: [AuthService,CookieService,PanierService,CategoriesmockService,CategoryService],
  bootstrap: []
})

export class ProductModule { }
