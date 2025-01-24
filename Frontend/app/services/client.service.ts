import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

// cette section a pour but de contacter une API pour récupérer les données d'un utilisateur connecté et les afficher dans son profil utilisateur
public apiUrl = 'http://localhost:8080/client';

  constructor(
    private readonly http: HttpClient,
  ) {}

  // Remplacez par l'URL réelle de votre API
   getCurrentClient(id: number): Observable<Client> {
     return this.http.get<Client>(`${this.apiUrl}/${id}`);
   }
   get ConnectedUserID(){
    return 1;
  }
}
