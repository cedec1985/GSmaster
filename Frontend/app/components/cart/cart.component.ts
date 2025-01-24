import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockEpuiseDirective } from '../../directives/stockEpuise.directive';
import { PanierService } from '../../services/panier.service';
import { AccessoiresComponent } from "../product/accessoires/accessoires.component";
import { MobilierComponent } from "../product/mobilier/mobilier.component";
import { OutillageComponent } from "../product/outillage/outillage.component";
import { PlantesComponent } from "../product/plantes/plantes.component";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    standalone: true,
    imports:[ CommonModule, OutillageComponent, MobilierComponent, PlantesComponent, AccessoiresComponent,FormsModule,ReactiveFormsModule,StockEpuiseDirective]
})
export class CartComponent implements OnInit{

cartItems:any[] = [];
cartTotalValue!: number;
prods: number;

 constructor(private panierService: PanierService) { 
    this.cartItems = this.panierService.getItemsFromCart();
    this.prods = this.panierService.getCartCount();
    panierService.cartItems$.subscribe(cart => {
      this.prods = this.panierService.getCartCount();
      this.cartItems = this.panierService.getItemsFromCart();
      this.cartTotalValue =  this.panierService.getTotalAmount();
    })

  }

  ngOnInit(): void {
  }

   handleRemoveItem = (product: any) => {
    this.panierService.removeFromCart(product);
  }

  handleIncrement = (product: any) => {
    this.panierService.addItemsToCart(product);
  }

   handleDecriment = (product: any) => {
    this.panierService.decrementFromCart(product);

  }
//---------------------------remarque : directive-------------------------------------//

  /*
  *isStockLimited
  vérifie la quantité en stock et affiche un message ou pas en fonction du nombre
  */
  quantity: number = 0;

}