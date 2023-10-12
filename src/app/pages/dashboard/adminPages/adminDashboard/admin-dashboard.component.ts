import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetUserNameService } from 'src/app/services/authorization/get-user-name.service';
import { LogoutAuthService } from 'src/app/services/authorization/logout-auth.service';
import { DialogComponent } from 'src/app/shared/sharedComponents/dialog/dialog.component';
import { adminLinksList } from '../adminFiles/adminLinks.file';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private USER_NAME: GetUserNameService,
    private LOGOUT: LogoutAuthService,
    private POP_UP: MatDialog
  ) {}

  adminSidebarLinks: { routeLink: string; routeIcon: string }[] =
    adminLinksList;

  sub!: any;
  userName!: string;
  userRole!: string;

  ngOnInit(): void {
    this.sub = this.USER_NAME.getUserDataFunc().subscribe((data) => {
      this.userName = data.fullname;
      this.userRole = data.responsibility === '1' ? 'supervisor' : 'user';
    });
  }

  logoutUser() {
    let dialogRef = this.POP_UP.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        this.LOGOUT.logoutFunc();
      }
    });
  }
}
