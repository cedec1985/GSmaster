import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ClientService } from '../../../services/client.service';
import { AuthService } from '../../../services/auth-service.service';
import { Observable } from 'rxjs';
import { Client } from '../../../models/client.model';
 
@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profiluser-display.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, TableModule],
  standalone: true
})
export class ProfilUserDisplayComponent implements OnInit {
constructor(
    private $client: ClientService,
    private $auth: AuthService,
  ) {}
   
  client$!: Observable<Client>;

  ngOnInit(): void {
    this.client$ = this.$client.getCurrentClient(this.$auth.connectedUserID);
  }
  
}