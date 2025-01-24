import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public static readonly APP_URL = "http://localhost:4200/";
  public static APP_URL2 : string = "http://localhost:8080/";

  findAllCategories() {
    return this.http.get<Category[]>(CategoryService.APP_URL + "/categories/");
  }
  findArticles() {
    return this.http.get<Article[]>(CategoryService.APP_URL2 + "/produit/");
    //pour trouver url du backend liée aux détails articles
  }
  findCategoryById(idCategory: number) {
    return this.http.get<Category>(CategoryService.APP_URL + "/categorie/" + idCategory);
  }
  saveCategory(category: Category) {
    this.http.post<Category>(CategoryService.APP_URL + "/categorie/", category);
  }
}

