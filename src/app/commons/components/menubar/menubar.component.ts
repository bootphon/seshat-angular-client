import { Component, OnInit } from '@angular/core';
import {RoleProvider} from '../../role-provider';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {CampaignShort} from '../../../api/models/campaign-short';

@Component({
  selector: 'seshat-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  campaignsData: Array<CampaignShort>;

  constructor(private roleProvider: RoleProvider, campaignsService: CampaignsService) { }

  ngOnInit() {
    if (this.roleProvider.isAdmin()) {
      // TODO: load campaign id's into attribute
    }
  }

  logout(){
    //TODO
  }

}
