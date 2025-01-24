import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [CommonModule, RouterModule]
})
export class NavbarComponent implements OnInit {
    logo! :string;
    @Input() isConnected: boolean = false;
    connected: boolean = false;
    
    constructor(private elementRef: ElementRef, private service :AuthService) {}

    ngOnInit(){
        this.logo ='assets/gardenstorelogo.png';
    }

    IsUserConnected() {
    if(
        this.service.login("","")) {
        this.isConnected;
        }
    if(!this.isConnected) {
    this.connected =true;
    this.service.login("cedricdecraim@msn.com","Test1234@") == this.connected;
    this.elementRef.nativeElement.innerText = 'cedricdecraim@msn.com';
             
        } else {
          }
    
}
}