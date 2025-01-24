import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoriesmockService } from '../../../services/categoriesmock.service';
import { ProduitresultComponent } from "../../produitresult/produitresult.component";
import { CartComponent } from '../../cart/cart.component';

@Component({
    selector: 'app-plantes',
    standalone: true,
    templateUrl: './plantes.component.html',
    styleUrl: './plantes.component.scss',
    imports: [CommonModule, RouterModule, ReactiveFormsModule, CurrencyPipe, ProduitresultComponent,CartComponent]
})
export class PlantesComponent implements OnInit{

  id!: number;
  name!: string;
  price!: number;
  reference!: number;
  avis!: string;
  url!: string;
  articleId!: number;
  quantity!: number;
  plantesCategorie:any={};
  categorieTrouve:any;

  constructor(private route:ActivatedRoute, private router : Router, private plantesService: CategoriesmockService) { }

  ngOnInit(): void {
  	this.plantesService.getCategorie(3).subscribe(data=>this.plantesCategorie=data);
  }

  processReq(message: any){
    console.log("message du fils :",message);
    this.plantesService.getCategoriesByNom(message).subscribe(
       data=>{
       this.categorieTrouve=data;
       let url :string = "/"+this.categorieTrouve[0].nom.toLowerCase();
       let id :number = this.categorieTrouve[0].id;
        this.router.navigate([url,id]);
     },err=>{

     });

  }

}