import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/categorie.service';
import { CategoriesmockService } from '../../services/categoriesmock.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  message!: string; 
 category!: any;
  categorie!: any;
  listCategory!: Category[];
  logo! :string;   

  constructor(private service: CategoriesmockService, private categoryService : CategoryService, private router : Router) { }
 
   ngOnInit(): void {
    this.logo="assets/gardenstorelogo.png";
    this.message = 'Bienvenue sur Garden Store ! Visitez notre magasin dédié aux articles de jardin !';
       this.service.getCategories().subscribe(data=>{
         this.category = data;
      },err=>{
        console.log("Erreur retourne : ",err);
      });
 
       this.findAllCategories()
   }
 
   findAllCategories() {
     this.categoryService.findAllCategories()
       .pipe()
       .subscribe(data => {
         console.log("Category from database : ",data);
         this.listCategory = data;
       }, error => {
         console.log(error);
       });
   }
 
  detailCategorie(nomCategorie:string){
    
      // this.service.getCategorie(id).subscribe(data=>{
      //    this.categorie = data;

       
    switch (nomCategorie) {
      case 'OUTILLAGE':
          this.router.navigate(["/product/outillage"]);
        
          break;
      case 'MOBILIER':
          this.router.navigate(["/product/mobilier"]);
          
          break;
      case 'PLANTES':
          this.router.navigate(["product/plantes"]);
          
          break;
      case 'ACCESSOIRES':
          this.router.navigate(["product/accessoires"]);
          break;
      default:
          console.log("No categorie exists!");
          break;
    }
 
  }
      
      // ,err=>{
      //   console.log("Erreur retourne categorie choisie : ",err);
      // });
}

