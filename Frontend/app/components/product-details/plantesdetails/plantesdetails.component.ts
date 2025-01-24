import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ProduitDTO } from '../../../models/dto/produit.dto';

@Component({
  selector: 'app-plantesdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plantesdetails.component.html',
  styleUrl: './plantesdetails.component.css'
})
export class PlantesdetailsComponent implements OnInit{
  apiUrl = 'http://localhost:8080/produit';
  article$!: Observable<ProduitDTO>;
  constructor(
    private readonly route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.article$ = this.getCurrentArticle(this.ArticleID).pipe(
      tap({
        next: (article: ProduitDTO) => {
          console.log('Fetched article:', article);
        },
        error: (error) => {
          console.error('Error fetching article:', error);
        }
      })
    )
  }
  getCurrentArticle(id: number): Observable<ProduitDTO> {
    return this.http.get<ProduitDTO>(`${this.apiUrl}/${id}`)
  }

  get ArticleID(): number {
    return this.route.snapshot.params['id'];
  }
    }