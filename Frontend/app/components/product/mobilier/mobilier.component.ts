import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartComponent } from "../../cart/cart.component";
import { CategoriesmockService } from '../../../services/categoriesmock.service';
import { ProduitresultComponent } from "../../produitresult/produitresult.component";


@Component({
    selector: 'app-mobilier',
    standalone: true,
    templateUrl: './mobilier.component.html',
    styleUrl: './mobilier.component.scss',
    imports: [CommonModule, RouterModule, ReactiveFormsModule, CartComponent, CurrencyPipe, ProduitresultComponent]
})
export class MobilierComponent implements OnInit{

  id!: number;
  name!: string;
  price!: number;
  reference!: number;
  avis!: string;
  url!: string;
  articleId!: number;
  quantity!: number;
  mobilierCategorie: any={};
  categorieTrouve:any;


  constructor(private route:ActivatedRoute, private router : Router, private mobilierService: CategoriesmockService) { }

  ngOnInit(): void {
  	this.mobilierService.getCategorie(2).subscribe(data=>this.mobilierCategorie=data);

  }

  processReq(message: any){
    console.log("message du composant fils cote pere:",message);
    this.mobilierService.getCategoriesByNom(message).subscribe(
       data=>{
       this.categorieTrouve=data;
       let url :string = "/"+this.categorieTrouve[0].nom.toLowerCase();
       let id :number = this.categorieTrouve[0].id;
        this.router.navigate([url,id]);
     },err=>{

     });

}}