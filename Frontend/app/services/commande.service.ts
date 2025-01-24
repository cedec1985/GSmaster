import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommandeAPIForm, CommandeDTO, CommandeForm } from '../models/dto/commande.dto';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  public apiUrl = 'http://localhost:8080/commande/register/commande';

  enregistrerCommande(commande: any): Observable<CommandeAPIForm> {
    return this.http.post<CommandeAPIForm>(this.apiUrl, commande);
  }
  getCommandeID(){
    return 1;
  }
}