import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PanierService } from '../../services/panier.service';
import { CommonModule } from '@angular/common';
import { Livreur } from '../../models/livreur';
import { Observable } from 'rxjs';
import { LivreurService } from '../../services/livreur.service';

@Component({
  selector: 'app-achattermine',
  templateUrl: './achattermine.component.html',
  styleUrls: ['./achattermine.component.css'],
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterModule],
  standalone: true
})
export class AchattermineComponent implements OnInit{
  registerForm!: FormGroup;
  submitted = false;
  cartItems: any[] = [];
  frais:number = 3.00;
  soustotal:number = 0.00;
  total:number = 0.00;


 mobNumberPattern = "^0[\d]{8}$";                                      // Numero de téléphone à 9 chiffres commençant par 

  constructor(private formBuilder: FormBuilder,private panier: PanierService, private router: Router, private readonly $livreur: LivreurService) { 
    this.cartItems = this.panier.getItemsFromCart();
    this.cartItems.forEach(element => console.log('product price : ',element.price));
    this.cartItems.forEach(element => this.soustotal += element.price);
    this.total = this.soustotal + this.frais;
    console.log('Sous total : ',this.soustotal);
    console.log('cartitems : ',this.cartItems);
  
  }
 
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern("^0[\d]{8}$")]],
      adr: ['', Validators.required],
      cb: ['', Validators.required]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // si formulaire invalide, on s'arrête.
      if (this.registerForm.invalid) {
          return;
      }
      if (this.registerForm.valid) {
      const firstname = this.registerForm.get('firstName')!.value;
      const lastname = this.registerForm.get('lastName')!.value;
      const email = this.registerForm.get('email')!.value;
      const adresse = this.registerForm.get('adr')!.value;
      const telephone = this.registerForm.get('tel')!.value;
      const cb = this.registerForm.get('cb')!.value;

  this.router.navigate(['/confirmation' , firstname, lastname, email, adresse, telephone,cb]);

      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }}

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
 
}
