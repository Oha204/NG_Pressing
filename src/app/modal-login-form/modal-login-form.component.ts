import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IToken } from '../interfaces/IToken';

@Component({
  selector: 'app-modal-login-form',
  templateUrl: './modal-login-form.component.html',
  styleUrls: ['./modal-login-form.component.css']
})
export class ModalLoginFormComponent {
  feedback: string ="";
  constructor(private authService:AuthService) {}
  
  public loginform:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

    handleSubmit(){
      this.authService.login(this.loginform.value).subscribe( {
        next:(token :IToken) =>{this.authService.saveToken(token.token)},
        error:(error) => this.feedback = 'Mauvais mot de passe / email'
      }
    )
  }
}
