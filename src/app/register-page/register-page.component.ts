import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as bcrypt from 'bcryptjs'; 

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{
  feedback: string ="";
  errorPass1: string ="";
  errorPass2: string ="";
  errorMail: string ="";

  ngOnInit() {
    // Initialisez le rôle ici
    this.formregister.get('roles')?.setValue('ROLE_USER');
  }

  constructor(private registerService:RegisterService) {}

  public formregister:FormGroup = new FormGroup({
    gender: new FormControl(''),
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    birthday: new FormControl(null),
    address: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_verif: new FormControl(''),
    roles: new FormControl(['ROLE_USER'])
  })

handleSubmit() {
  if(this.formregister.valid) {
    // Vérification format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formregister.get('email')?.value)) {
      this.errorMail = 'Votre email n\'est pas correct, veuillez vérifier le format';
      return;
    }

    // Vérification mdp identique 
    if (this.formregister.get('password')?.value !== this.formregister.get('password_verif')?.value) {
      this.errorPass1 = 'Vos mots de passe ne sont pas identiques';
      return;
    }

     // Vérifier la longueur du mot de passe
    if (this.formregister.get('password')?.value.length < 5) {
      this.errorPass2 = 'Votre mot de passe doit faire au moins 5 caractères';
      return;
    } 

    // Hashage password
    // const hashedPassword = bcrypt.hashSync(this.formregister.get('password')?.value, 10);
    // this.formregister.get('password')?.setValue(hashedPassword);
    
    // const hashedPasswordVerif = bcrypt.hashSync(this.formregister.get('password_verif')?.value, 10);
    // this.formregister.get('password_verif')?.setValue(hashedPasswordVerif);

     // Ajouter le rôle avant d'envoyer la requête
    this.formregister.get('roles')?.setValue(['ROLE_USER']);
    
    // Si toutes les conditions sont remplies, envoyer le formulaire
    this.registerService.add(this.formregister.value).subscribe({
      complete: () => {
        this.feedback = 'Inscription terminée.';
        this.formregister.reset();
      },
      error: () => this.feedback = 'Utilisateur existe deja.'
    });
}}
}

