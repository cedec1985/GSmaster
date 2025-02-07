import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
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
    
    constructor(public elementRef: ElementRef, private service :AuthService) {}

    ngOnInit(){
        this.logo ='assets/gardenstorelogo.png';
        this.IsUserConnected(this.isConnected = false);
    }

    IsUserConnected(isConnected : boolean ) {
    if(this.service.login('',''))
         {
        this.isConnected = false;
        }
   if (
    this.service.login("cedricdecraim@msn.com","Test1234@"))
    {
    this.isConnected =true;
    this.elementRef.nativeElement.innerText = 'cedricdecraim@msn.com';  
        }
    return isConnected;
}
}