import {Component, OnInit} from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {CampaignStatus} from '../../../api/models/campaign-status';
import {SeshatEventsService} from '../../../commons/seshat-events.service';
import {CampaignDisplayParameters, DisplayPrefService} from '../../../commons/display-pref.service';
import {RoleProvider} from '../../../commons/role-provider';


@Component({
  selector: 'seshat-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent implements OnInit {
  campaignsList: Array<CampaignStatus>;
  campaignDisplayPref: CampaignDisplayParameters;

  constructor(private campaignsAPI: CampaignsService,
              private roleProvider: RoleProvider,
              private displayPref: DisplayPrefService,
              private seshatEvents: SeshatEventsService) {
  }

  ngOnInit() {
    this.campaignDisplayPref = this.displayPref.campaignDisplayPref;
    this.updateCampaignList();
  }

  updateCampaignList() {
    this.campaignsAPI.campaignsListGet().subscribe(
      (data) => {
        this.campaignsList = this.displayPref.sortDataBasedOnPref(data);
      },
      (err) => console.log('Error retrieving campaign list'),
    );
  }

  campaignDisplayPrefChange() {
    this.displayPref.setDisplayPref(this.campaignDisplayPref);
    this.updateCampaignList();
    // this is emitted for the menubar
    this.seshatEvents.campaignsDisplayChange.emit();
  }

}
