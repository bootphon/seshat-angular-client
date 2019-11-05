import {Component, OnInit} from '@angular/core';
import {RoleProvider} from '../../role-provider';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {AccountsService} from '../../../api/services/accounts.service';
import {CampaignStatus} from '../../../api/models/campaign-status';
import {UserShortProfile} from '../../../api/models/user-short-profile';

@Component({
  selector: 'seshat-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  campaignsData: Array<CampaignStatus>;
  userData: UserShortProfile;
  notifCount = 0;

  constructor(
    private roleProvider: RoleProvider,
    private campaignsService: CampaignsService,
    private accountsService: AccountsService,
    private router: Router) {
    this.campaignsData = [];
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActivatedMenuItem(event);
      }
    });

    this.roleProvider.getUserData().then((data) =>
      this.userData = data);
    if (this.roleProvider.isAdmin()) {
      this.campaignsService.campaignsListGet().subscribe(
        (data) => {
          this.campaignsData = data;
        }
      );
    }
    this.accountsService.accountsNotificationsCountGet().subscribe(
      (data) => {
        this.notifCount = data.count;
      }
    );
  }

  updateActivatedMenuItem(event: NavigationEnd) {
    // TODO
  }

  displayNotifications() {
    // TODO
  }

  logout() {
    this.roleProvider.logout();
    this.router.navigate(['/login']);
  }

}
