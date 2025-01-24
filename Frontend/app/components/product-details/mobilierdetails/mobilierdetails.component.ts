import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ProduitDTO } from '../../../models/dto/produit.dto';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-mobilierdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobilierdetails.component.html',
  styleUrl: './mobilierdetails.component.css'
})
export class MobilierdetailsComponent implements OnInit {
  
  apiUrl = 'http://localhost:8080/produit';
  article$!: Observable<ProduitDTO>;
  constructor(
    private http: HttpClient,
    private article :ArticleService
  ) {}
  ngOnInit(): void { this.article.loadDataMobilier(11);
  }
 // getCurrentArticle(id: number): Observable<ProduitDTO> {
   // return this.http.get<ProduitDTO>(`${this.apiUrl}/${id}`)
 // }
 }