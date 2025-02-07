import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Category } from '../../models/category';
import { AuthService } from '../../services/auth-service.service';
import { CategoryService } from '../../services/categorie.service';
import { CategoriesmockService } from '../../services/categoriesmock.service';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Input() isConnected: boolean = false;
  message!: string;
  category!: any;
  categorie!: any;
  listCategory!: Category[];
  logo!: string;
  urloutillage!: string;
  urlmobilier!:string;
  urlplantes!:string;
  urlaccessoires!:string;

  constructor(private service: CategoriesmockService, private categoryService : CategoryService, private router : Router, private auth :AuthService, public elementRef:ElementRef) {}
  
   ngOnInit(): void {
    this.message = 'Bienvenue sur Garden Store ! Visitez notre magasin dédié aux articles de jardin !';
    this.logo="assets/gardenstorelogo.png";
    this.urloutillage ="assets/categories/outillage.jpg";
    this.urlmobilier ="assets/categories/mobilier.jpg";
    this.urlplantes ="assets/categories/plantes.jpeg";
    this.urlaccessoires ="assets/categories/accessoires.jpg";
   

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
 
   detailCategorie(id:number){

    this.service.getCategorie(id).subscribe(datas=>{
      this.categorie = datas;

      let nomCategorie : string = this.categorie.nom;
      
        switch (nomCategorie) {
    case 'OUTILLAGE':
        this.router.navigate(["/product/outillage",id]);
      
     
        break;
    case 'MOBILIER':
        this.router.navigate(["/product/mobilier",id]);
        
        break;
    case 'PLANTES':
        this.router.navigate(["product/plantes",id]);
        
        break;
    case 'ACCESSOIRES':
        this.router.navigate(["product/accessoires",id]);
        
        break;
    default:
        console.log("No categorie exists!");
        break;
  }

     },err=>{
       console.log("Erreur retourne categorie choisie : ",err);
     });

   }
   login() : boolean { 
   if(true){
    if(this.auth.estConnecte() !== null){
      this.isConnected = true;
      this.elementRef.nativeElement.innerText = 'cedricdecraim@msn.com';  
    }
    return this.isConnected;
}}}