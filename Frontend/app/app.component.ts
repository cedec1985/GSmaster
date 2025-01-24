import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
import { ProfilUserComponent } from './components/profiluser/profiluser.component';
import { RegisterComponent } from './components/register/register.component';
import { StockEpuiseDirective } from './directives/stockEpuise.directive';
import { AuthService } from './services/auth-service.service';
import { PanierService } from './services/panier.service';
import { AccessoiresdetailsComponent } from './components/product-details/accessoiresdetails/accessoiresdetails.component';
import { MobilierdetailsComponent } from './components/product-details/mobilierdetails/mobilierdetails.component';
import { OutillagedetailsComponent } from './components/product-details/outillagedetails/outillagedetails.component';
import { PlantesdetailsComponent } from './components/product-details/plantesdetails/plantesdetails.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AuthService,CookieService,PanierService],
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule,HttpClientModule,RouterLink,
       HomeComponent,NavbarComponent, CartComponent,AdminComponent,ConnexionComponent, AchattermineComponent,ConfirmationComponent,ProduitresultComponent,StockEpuiseDirective,FormsModule,ReactiveFormsModule,
        RegisterComponent,OutillageComponent,MobilierComponent,PlantesComponent,AccessoiresComponent,CategoryComponent,ProfilUserComponent,StockEpuiseDirective,ProductDetailsComponent,OutillagedetailsComponent,MobilierdetailsComponent,PlantesdetailsComponent,AccessoiresdetailsComponent,ContactComponent]
      })

export class AppComponent implements OnInit{
  panier! :any;
  logo!:string;
  @Input() isConnected: boolean = false;
  connected:boolean=false;
  email!:string;
  password!:string;

  constructor(private panierService: PanierService, private auth:AuthService, private elementRef: ElementRef, private http :HttpClient, private route: ActivatedRoute) {
  	this.panier = this.panierService.getCartCount();
  }

  ngOnInit() :void{
setInterval(() => {
      this.panier = this.panierService.getCartCount();
      console.log("nombre produits dans le panier : ",this.panier);
    }, 200);
  
    }

}