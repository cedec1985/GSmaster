import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [CommonModule, RouterModule]
})
export class NavbarComponent implements OnInit {
    logo! :string;

    ngOnInit(){
        this.logo ='assets/gardenstorelogo.png';
    }
}