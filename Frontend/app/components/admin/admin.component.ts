import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  standalone: true
})
export class AdminComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {}
  
  seConnecter(){
      alert("vous êtes connecté!");
      this.router.navigateByUrl('/home');
      console.log('vous êtes connecté!')
  } 
  seDeconnecter(){
      (this.router.navigate(['/connexion']), //rediriger vers la page 'connexion' si admin pas connecté
      console.log('vous êtes déconnecté!')
    );
  }
}


