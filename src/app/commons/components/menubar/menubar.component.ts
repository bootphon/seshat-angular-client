import { Component, OnInit } from '@angular/core';
import {RoleProvider, UserData} from '../../role-provider';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {CampaignShort} from '../../../api/models/campaign-short';
import {Router} from '@angular/router';

@Component({
  selector: 'seshat-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  campaignsData: Array<CampaignShort>;
  userData: UserData;

  constructor(
    private roleProvider: RoleProvider,
    private campaignsService: CampaignsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.roleProvider.getUserData().then((data) =>
      this.userData = data);
    if (this.roleProvider.isAdmin()) {
      this.campaignsService.campaignsListGet().subscribe(
        (data) => {
          this.campaignsData = data
        }
      );
    }
  }
  logout() {
    this.roleProvider.logout();
    this.router.navigate(['/login']);
  }

}
