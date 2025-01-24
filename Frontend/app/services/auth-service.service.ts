
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterAPIForm} from '../models/user-create.form';

const BASE_URL = 'allow-control-access-origin: http://localhost:8080/client/insert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private isAuthenticated: boolean = true; 

constructor(private http: HttpClient) {}

  // Simuler le hachage du mot de passe côté client (ne le faites pas en production)
  hashPassword(password: string): string {
    return password;
  }

  // Appel à l'API pour enregistrer l'utilisateur avec mot de passe haché
  register(form: RegisterAPIForm): Observable<any> {

    return this.http.post<any>(BASE_URL, form);
  }
  
  login(email: string, password: string): boolean {

    this.isAuthenticated = email === 'cedricdecraim@msn.com' && password === 'Test1234@';
    return this.isAuthenticated;
  }

  public seConnecter(){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public seDeconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

  get connectedUserID(){
    return 1;
  }
}