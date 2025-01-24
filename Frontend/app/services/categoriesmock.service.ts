import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map} from 'rxjs/operators';

const CATEGORIES = [
  {id: 1, nom: 'OUTILLAGE',url: 'assets/categories/OUTILLAGE.jpg', quantity: 15,
  produit: [
  	{"id": 1,"name": "rateau", "price": 2.50,"quantity":1,"reference":1, "avis":"bon produit", "url": "assets/images/rateau.jpg"
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
   "id":9, "name": "gants de jardinage", "price": 5.50, "quantity": 2, "reference": 9, "avis": "très bonne protection", "url":"assets/images/gantsdejardin.jpg"
  },
  {
   "id":10, "name": "tondeuse", "price": 110.50, "quantity": 1, "reference": 10, "avis": "super utile", "url":"assets/images/tondeuse.jpg"
  }

  	]
  },
  {id: 2, nom: 'MOBILIER', url: 'assets/categories/MOBILIER.jpg', quantity: 15,
  	produit: [
  		{ "id": 1,
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
      "url": "assets/images/transat-jardin.jpg" }
  	]
  },
  {id: 3, nom: 'PLANTES',  url: 'assets/categories/PLANTES.jpg', quantity: 15,
  	produit: [
  		{"id":1, "name": "plante artificielle", "price": 15, "quantity": 1, "reference": 1, "avis": "grande et belle plante", "url":"assets/images/planteartificielle.jpg"},
      {"id":2, "name": "cyprès", "price": 75, "quantity": 1, "reference": 2, "avis": "durable", "url":"assets/images/cypres.jpg"},
      {"id":3, "name": "bambou", "price": 60, "quantity": 5, "reference": 4, "avis": "plante exotique", "url":"assets/images/bambou.jpg"},
      {"id":4, "name": "magnolia", "price": 70, "quantity": 1, "reference": 5, "avis": "plante vivace", "url":"assets/images/magnolia.jpg"}
  	]
  },
  {id: 4, nom: 'ACCESSOIRES',  url: 'assets/categories/ACCESSOIRES.jpg', quantity: 15,
  	produit: [
  		{ "id":1, "name": "fontaine de jardin", "price": 145, "quantity": 1, "reference": 1, "avis": "qualité du matériau super", "url": "assets/images/fontainedejardin.jpg"},
      {"id":2, "name": "nain de jardin", "price": 65, "quantity":2, "reference": 2, "avis": "résistant", "url": "assets/images/naindejardin.jpg"},
      {"id":3, "name": "lampadaire de jardin", "price": 145, "quantity": 1, "reference": 3, "avis": "bon design", "url": "assets/images/lampadaire-jardin.jpg"},
      {"id":4, "name": "housse de jardin", "price": 30, "quantity": 1, "reference": 4, "avis": "grande surface", "url": "assets/images/houssedejardin.jpg"},
      {"id":5, "name": "tuyau darrosage", "price": 188, "quantity": 1, "reference": 5, "avis": "bon marché et installation facile", "url": "assets/images/tuyauarrosage.jpg"}
  	]
  },
];

@Injectable({
  providedIn: 'root'
})
export class CategoriesmockService {

  getCategories() { return of(CATEGORIES); }
  getArticles(){return of(CATEGORIES[4])}

  getCategorieByUrl(url:number | string){
    return this.getCategories().pipe(
      map(categories => categories.find(categorie => categorie.url === url))
    );
  }
  getArticle(id: number | string) {
    return this.getCategories().pipe(
      // (+) before `id` turns the string into a number
      map(articles => articles.find(article => article.id === +id))
    );
  }

  getCategorie(id: number | string) {
    return this.getCategories().pipe(
      // (+) before `id` turns the string into a number
      map(categories => categories.find(categorie => categorie.id === +id))
    );
  }

  getCategoriesByNom(nom: string){
    return this.getCategories().pipe(
      map(categories => categories.filter(cat => cat.nom === nom))
    )
  }

  getCategoriesByQuantity(quantity: number) {
    return this.getCategories().pipe(
      map(categories => categories.filter(cat => cat.quantity === quantity))
    );
  }
}

