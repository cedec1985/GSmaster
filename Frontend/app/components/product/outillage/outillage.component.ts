import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartComponent } from '../../cart/cart.component';
import { CategoriesmockService } from '../../../services/categoriesmock.service';
import { ProduitresultComponent } from "../../produitresult/produitresult.component";


@Component({
    selector: 'app-outillage',
    standalone: true,
    templateUrl: './outillage.component.html',
    styleUrl: './outillage.component.scss',
    imports: [CommonModule, RouterModule, ReactiveFormsModule, CartComponent, CurrencyPipe, ProduitresultComponent]
})
export class OutillageComponent implements OnInit{

  id!: number;
  name!: string;
  price!: number;
  reference!: number;
  avis!: string;
  url!: string;
  articleId!: number;
  quantity!: number;
  outillageCategorie: any ={};
  categorieTrouve!:any;

  constructor(private route:ActivatedRoute, private router : Router, private categorieService: CategoriesmockService){}

  ngOnInit(): void {
  	this.categorieService.getCategorie(1).subscribe(data=>this.outillageCategorie=data);
  }

  processReq(message: any){
    console.log("message du composant fils cote pere :",message);
     this.categorieService.getCategoriesByNom(message).subscribe(
       data=>{
       this.categorieTrouve=data;
       let url :string = "/"+this.categorieTrouve[0].nom.toLowerCase();
       let id :number = this.categorieTrouve[0].id;
        this.router.navigate([url,id]);
     },err=>{
         console.log("erreur obtenue :",err);
     });

  }}
