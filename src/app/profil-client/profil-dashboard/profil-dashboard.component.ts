import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ProfilUserService } from 'src/app/services/profil-user.service';

@Component({
  selector: 'app-profil-dashboard',
  templateUrl: './profil-dashboard.component.html',
  styleUrls: ['./profil-dashboard.component.css']
})
export class ProfilDashboardComponent implements OnInit{

  constructor(private profilUserService: ProfilUserService) {}

  // currentUser: IUser | null = null;

  ngOnInit() {
    // this.getCurrentuser();
  }

  // getCurrentuser() {
  //   this.profilUserService.fetchCurrentUser().subscribe(data => {
  //     this.currentUser = data;
  //   });
  // }
}
