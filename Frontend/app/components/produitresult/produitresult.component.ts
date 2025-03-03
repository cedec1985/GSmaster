import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../../models/article';
import { Categorie } from '../../models/categorie';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-produitresult',
  templateUrl: './produitresult.component.html',
  styleUrls: ['./produitresult.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  standalone: true
})
export class ProduitresultComponent{
	outillage = 'OUTILLAGE';
	mobilier = 'MOBILIER';
	plantes = 'PLANTES';
	accessoires = 'ACCESSOIRES';
	categorieName!:any;

  constructor(private panier: PanierService) {
  }
articles: any[] = [];
article: any;
 
public apiUrl = 'http://localhost:8080/produit';
article$!: Observable<Article>;

  @Input()
  public result: Categorie | any;
  @Output()
  sendRequestData = new EventEmitter();

  getRoute(productId: number){
    const catNameLower = this.result.nom.toLowerCase()
    return ['/product', catNameLower, productId]
  }
  
  getCategoryName(catName:any) {
  	console.log("categorie nom cote fils : "+catName);
  	this.sendRequestData.emit(catName);
  }
  sendEvent(){
  	this.sendRequestData.emit(this.categorieName);
  }
  handelAddToCart = (product: { id: any; name: any; price: any; quantity: any; reference: any; avis: any; url: any; }) => {
    this.panier.addItemsToCart(product);
  }

}

