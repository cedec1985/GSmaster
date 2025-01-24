import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterAPIForm, RegisterForm } from '../../models/user-create.form';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    inscriptionForm!: FormGroup;
    inscriptionData!: Form;
    email!: string;
    password!: string;
    confirmPassword!: string;
    nom!: string;
    prenom!: string;
    ville!: string;
    rue!: string;
    codePostal!: string;
    telephone!: string;
    numero!: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  
  ) {
    this.createForm();
  }

  createForm(): void {

    this.inscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nom: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
      prenom: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
        ],
      ],
      confirmPassword: ['', Validators.required],
      ville: ['', Validators.required],
      rue: ['', Validators.required],
      codePostal: ['', Validators.required],
      telephone: [
        '',
        [
          Validators.required,
          Validators.minLength(9)
        ],
      ],
      numero: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if( this.inscriptionForm.valid ){
      // Créez une copie des données du formulaire
      const formData: RegisterForm = { ...this.inscriptionForm.value };
      const inscriptionData: RegisterAPIForm = {
        nom: formData.nom,
        prenom: formData.prenom,
        mail: formData.email,
        password: formData.password,
        telephone: formData.telephone,
        addresse: {
          addresseVille: formData.ville,
          addresseCodepostal: formData.codePostal,
          addresseNumero: formData.numero,
          addresseRue: formData.rue
        }
      };
      console.log('Données transmises:', inscriptionData);
      this.auth.register(inscriptionData).subscribe({
        next: (data: string) => {
          console.log('données récupérées:' + data);
          alert('Données transmises avec succès');
          this.router.navigateByUrl('')
        },
        error: (error: any) => {
          console.error(error)
        }
      })

    }
  }

  saveToLocalStorage(data: Form): void {
    // Convertit l'objet JavaScript en chaîne JSON
    const jsonData = JSON.stringify(data);

    // Stocke les données dans le local storage avec une clé spécifique
    localStorage.setItem('inscriptionData', jsonData);

    // Réinitialiser le formulaire après la soumission
    this.inscriptionForm.reset();
  }

  // Fonction pour masquer le mot de passe avec des étoiles
  maskPassword(password: string | undefined): string {
    // Vous pouvez ajuster le nombre d'étoiles en fonction de vos besoins
    return password ? '*'.repeat(password.length) : '';
  }
}


