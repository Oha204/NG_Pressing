import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { ProfilUserService } from '../../services/profil-user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-info-perso',
  templateUrl: './info-perso.component.html',
  styleUrls: ['./info-perso.component.css']
})
export class InfoPersoComponent implements OnInit {

  constructor(private allInfoUsers:ProfilUserService, private userlogin: AuthService) {}

  users: IUser[] = [];
  user: IUser | undefined;

  ngOnInit() {
    this.getInfos();
    // this.fetchLoggedInUserInfo();

  }

  getInfos() {
    this.allInfoUsers.fetchAllInfoUser().subscribe(data => {
      this.users = data;
      return this.users;
    })
  } 

  // fetchLoggedInUserInfo() {
  //   this.userlogin.getToken().subscribe(data => {
  //     this.user = data;
  //   });
  } 

