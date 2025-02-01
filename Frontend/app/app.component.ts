import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth-service.service';
import { PanierService } from './services/panier.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AuthService,CookieService,PanierService],
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule, HttpClientModule, RouterLink,
    NavbarComponent, FormsModule, ReactiveFormsModule]
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