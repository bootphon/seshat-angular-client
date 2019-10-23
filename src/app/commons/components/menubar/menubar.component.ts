import { Component, OnInit } from '@angular/core';
import {RoleProvider, UserData} from '../../role-provider';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {CampaignShort} from '../../../api/models/campaign-short';

@Component({
  selector: 'seshat-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  campaignsData: Array<CampaignShort>;
  userData: UserData;

  constructor(private roleProvider: RoleProvider, campaignsService: CampaignsService) { }

  ngOnInit() {
    this.roleProvider.getUserData().then((data) =>
      this.userData = data);
    if (this.roleProvider.isAdmin()) {
      // TODO: load campaign id's into attribute
    }
  }

  logout(){
    //TODO
  }
  isAdmin(){
    this.roleProvider.isAdmin();
  }
  isAnnotator(){
    this.roleProvider.isAnnotator();
  }

}
