import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ProfilUserService } from 'src/app/services/profil-user.service';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {
  user: IUser | null = null; 

  constructor(private profilUserService: ProfilUserService, private authService: AuthService) {}

  users: IUser[] = [];

  ngOnInit() {
    this.getInfos();
  }

  getInfos() {
    this.profilUserService.fetchAllInfoUser().subscribe(data => {
      this.users = data;
      return this.users;
    })
  } 
}
