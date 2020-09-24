import {Injectable} from '@angular/core';
import {CampaignStatus} from '../api/models/campaign-status';
import {RoleProvider} from './role-provider';

export type CampaignSortParam = 'creation' | 'lastUpdated' | 'name';

export interface CampaignDisplayParameters {
  sortBy: CampaignSortParam;
  excludeOthers: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DisplayPrefService {
  public campaignDisplayPref: CampaignDisplayParameters = {sortBy: 'lastUpdated', excludeOthers: true};

  constructor(private roleProvider: RoleProvider) {
    this.loadCampaignDisplayFromLocalStorage();
  }

  loadCampaignDisplayFromLocalStorage() {
    if (localStorage.getItem('campaignDisplayPref') !== null) {
      this.campaignDisplayPref = JSON.parse(localStorage.getItem('campaignDisplayPref'));
    }
  }

  setDisplayPref(pref: CampaignDisplayParameters) {
    this.campaignDisplayPref = pref;
    localStorage.setItem('campaignDisplayPref', JSON.stringify(this.campaignDisplayPref));
  }


  sortDataBasedOnPref(data: CampaignStatus[]) {
    if (this.campaignDisplayPref.excludeOthers) {
      data = data.filter(campaignData => campaignData.creator.username === this.roleProvider.getUserName());
    }
    switch (this.campaignDisplayPref.sortBy) {
      case 'creation':
        data.sort((a, b) => a.creation_time >= b.creation_time ? 1 : -1);
        break;
      case 'lastUpdated':
        data.sort((a, b) => a.last_update_time >= b.last_update_time ? -1 : 1);
        break;
      case 'name':
        data.sort((a, b) => a.name >= b.name ? 1 : -1);
        break;
    }
    return data;
  }

}
