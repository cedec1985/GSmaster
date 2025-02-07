import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmailValidator, Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  standalone: true
})

export class ConnexionComponent {
  
  loginForm! :FormGroup;
  data!: Form;
  role: string = '';
  password: string = '';
  cookieService: any;
  email: string ='';

  constructor(
    
    private router: Router,
    private formBuilder: FormBuilder,
    private service: AuthService,
    private validator : EmailValidator
  ) {{
    this.Formulaire();
  }}
  
  Formulaire(): void {

   this.loginForm=this.formBuilder.group({
     
      email: ['', Validators.required,Validators.email],
      password: ['', Validators.required],
    });
  }

  login() { 
   
      if
        (this.loginForm.value.password === 'Test1234@' && this.loginForm.value.email === 'cedricdecraim@msn.com')
        {
      
      this.service.login(this.email, this.password) 
      console.log('Login réussi');
      alert('bravo, vous êtes connecté');
      console.log(this.maskPassword(this.loginForm.value.password));
      const jsonData = JSON.stringify(this.email);
      localStorage.setItem('email utilisateur : ', jsonData);
      this.service.seConnecter();      // appel de la fonction de connexion
      this.router.navigate(['/']);
      this.loginForm.reset();
      
       }
      
      
      }
       seDeconnecter(){

        (this.router.navigate(['/connexion']), //rediriger vers la page 'connexion' si admin pas connecté
        console.log('vous êtes déconnecté!'),
        alert("vous êtes déconnecté"),
        this.service.seDeconnecter()
      );
    }
      // Fonction pour masquer le mot de passe avec des étoiles
      maskPassword(password: string | undefined): string {
        // Vous pouvez ajuster le nombre d'étoiles en fonction de vos besoins
        return password ? '*'.repeat(password.length) : '';
      }
               
    }
    