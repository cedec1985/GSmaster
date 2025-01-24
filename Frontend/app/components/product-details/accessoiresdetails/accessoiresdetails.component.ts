import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, tap } from 'rxjs';
import { Article } from '../../../models/article';
import { ProduitDTO } from '../../../models/dto/produit.dto';

@Component({
  selector: 'app-accessoiresdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accessoiresdetails.component.html',
  styleUrl: './accessoiresdetails.component.css'
})
export class AccessoiresdetailsComponent implements OnInit {
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


