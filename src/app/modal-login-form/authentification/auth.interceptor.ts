import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  auth:string="";
  constructor(private authService:AuthService) {}

  //cette fonction permet d’ajouter un jeton d’authentification à toutes les requêtes HTTP sortantes.
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();
    if(token !== null){
      let clone = request.clone({
        headers : request.headers.set('Authorization', 'bearer'+ 'token')
      })
      return next.handle(clone)
    }
    return next.handle(request);
  }
}
