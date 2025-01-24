
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PanierService {
 
  cartItems$ = new BehaviorSubject<any[]>([])

  cartItems:any[] = [];
  totalAmount!: number;
  id!: number; 
  name!: string; 
  price!: number; 
  quantity!: number; 
  reference!: number; 
  avis!: string;
  url! :string;
  cartCount!: number;
  image!: string;

  constructor(private router: Router, private http :HttpClient) { }

  addItemsToCart (product:any)  {
    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].quantity++;
        productExists = true;
        this.getTotalAmount();
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,//product.quantity,
        reference: product.reference,
        avis: product.avis,
        url: product.url,
        deliveredBy:product.deliveredBy,
        orderedBy: product.orderedBy
      });
    }
    this.getTotalAmount();
    this.cartItems$.next(this.cartItems)
  }

  getTotalAmount() {
    if (this.cartItems) {
      this.totalAmount = 0;
      this.cartItems.forEach((item) => {
        this.totalAmount += (item.quantity * item.price );
      })};
      return this.totalAmount
    }
  

  getItemsFromCart() {
    return this.cartItems;
  }
  getCartCount(){
    if (this.cartItems) {
      this.cartCount = 0;
      this.cartItems.forEach((item) => {
        this.cartCount += item.quantity;
      }) };
      return this.cartCount
  }

  clearCart () {
    this.cartItems = [];
    this.router.navigate(['']);
    this.cartItems$.next(this.cartItems)
  }

  removeFromCart (product:any) {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    if (this.cartItems.length === 0) {
      this.router.navigate(['']);
    }
    this.getTotalAmount();
    this.cartItems$.next(this.cartItems)
  }

  decrementFromCart(product:any) {
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        if (this.cartItems[i].quantity === 0) {
          this.removeFromCart(product);
        } else {
          this.cartItems[i].quantity--;
        }
        this.getTotalAmount();
        break;
      }
    }
    this.getTotalAmount();
    this.cartItems$.next(this.cartItems)
  }

  getProductList() {
    return [

      {
        "id": 1,
        "nom": "OUTILLAGE",
        "url": "assets/categories/OUTILLAGE.jpg",
        "produits": [
        {
	        "id": 1,
	        "name": "rateau",
	        "price": 2.50,
          "quantity":1,
          "reference":1,
          "avis":"bon produit",
	        "url": "assets/images/rateau.jpg"
        },
        {"id":2, "name": "sceau", "price": 5.00, "quantity": 2, "reference": 2, "avis": "qualité moyenne", "url":"assets/images/sceau.jpg"
        },
	      {"id":3, "name": "pelle", "price": 8.00, "quantity": 1, "reference": 3, "avis": "bonne qualité", "url":"assets/images/pelle.jpg"
        },
        {
	         "id":4, "name": "piquet de terre", "price": 3.50, "quantity": 6, "reference": 4, "avis": "produit convenable", "url":"assets/images/piquetdeterre.jpg"
        },
        {
	       "id":5, "name": "pioche", "price": 4.50, "quantity": 1, "reference": 5, "avis": "parfait", "url":"assets/images/pioche.jpg"
        },
        {
         "id":6, "name": "bêche", "price": 3.50, "quantity": 1, "reference": 6, "avis": "parfait", "url":"assets/images/bêche.jpg"
        },
        {
         "id":7, "name": "hâche", "price": 4.50, "quantity": 1, "reference": 7, "avis": "parfait", "url":"assets/images/hâche.jpg"
        },
        {
         "id":8, "name": "tronçonneuse", "price": 130.50, "quantity": 1, "reference": 8, "avis": "qualité au rendez-vous", "url":"assets/images/tronçonneuse.jpg"
        },
        {
         "id":9, "name": "gants de jardinage", "price": 5.50, "quantity": 2, "reference": 9, "avis": "très bonne protection", "url":"assets/images/gantsdejardinage.jpg"
        },
        {
         "id":10, "name": "tondeuse", "price": 110.50, "quantity": 1, "reference": 10, "avis": "super utile", "url":"assets/images/tondeuse.jpg"
        },
        ]
      },
      {
        "id": 2,
        "nom": "MOBILIER  ",
        "url": "assets/categories/MOBILIER.jpg",
        "produits": [
        {
          "id": 1,
	        "name": "table + 2 chaises",
	        "price": 82.50,
          "quantity":1,
          "reference":1,
          "avis":"bon produit",
	        "url": "assets/images/table-jardin-avec-ses-2-chaises-en-fer.jpg"
        },
        {
	         "id": 2,
	        "name": "banc de jardin",
	        "price": 70.50,
          "quantity":1,
          "reference":2,
          "avis":"confortable",
	        "url": "assets/images/bancdejardin.jpg"
        },
        {
	         "id": 3,
	        "name": "tonnelle",
	        "price": 100.50,
          "quantity":1,
          "reference":3,
          "avis":"bonne qualité",
	        "url": "assets/images/tonnelle.jpg"
        },
        {
	       "id": 4,
	        "name": "parasol",
	        "price": 62.50,
          "quantity":2,
          "reference":4,
          "avis":"produit convenable",
	        "url": "assets/images/parasoldejardin.jpg"
        },
        {
          "id": 5,
	        "name": "transat",
	        "price": 60.50,
          "quantity":2,
          "reference":5,
          "avis":"parfait",
	        "url": "assets/images/transat-jardin.jpg" 
        }
        ]
      },
      {
        "id": 3,
        "nom": "PLANTES ",
        "url": "assets/categories/PLANTES.jpg",
        "produits": [
    {"id":1, "name": "plante artificielle", "price": 15, "quantity": 1, "reference": 1, "avis": "grande et belle plante", "url":"assets/images/planteartificielle.jpg"},
    {"id":2, "name": "cyprès", "price": 75, "quantity": 1, "reference": 2, "avis": "durable", "url":"assets/images/cypres.jpg"},
    {"id":3, "name": "bambou", "price": 60, "quantity": 5, "reference": 4, "avis": "plante exotique", "url":"assets/images/bambou.jpg"},
    {"id":4, "name": "magnolia", "price": 70, "quantity": 1, "reference": 5, "avis": "plante vivace", "url":"assets/images/magnolia.jpg"},
        ]
      },
     {
        "id": 4,
        "nom": "ACCESSOIRES",
        "url": "assets/categories/ACCESSOIRES.jpg",
        "produits": [
    {   "id":1, "name": "fontaine de jardin", "price": 45, "quantity": 1, "reference": 1, "avis": "qualité du matériau super", "url": "assets/images/fontainedejardin.jpg"},
        {"id":2, "name": "nain de jardin", "price": 65, "quantity":2, "reference": 2, "avis": "résistant", "url": "assets/images/naindejardin.jpg"},
        {"id":3, "name": "lampadaire de jardin", "price": 145, "quantity": 1, "reference": 3, "avis": "bon design", "url": "assets/images/lampadaire-jardin.jpg"},
        {"id":4, "name": "housse de jardin", "price": 30, "quantity": 1, "reference": 4, "avis": "grande surface", "url": "assets/images/houssedejardin.jpg"},
        {"id":5, "name": "tuyau darrosage", "price": 188, "quantity": 1, "reference": 5, "avis": "bon marché et installation facile", "url": "assets/images/tuyauarrosage.jpg"}
        ]
      }
    ];
  }
}

