import { Injectable } from '@angular/core';
import {SeshatEventsService} from './seshat-events.service';

type CampaignSortParam = 'creation' | 'lastUpdated' | 'name';

@Injectable({
  providedIn: 'root'
})
export class ViewPrefService {
  sortCampaignsBy: CampaignSortParam = 'lastUpdated';
  excludeOtherUsersCampaigns = false;

  constructor(eventsService: SeshatEventsService) {
    Object.getOwnPropertyNames(this).forEach(
      property => this[property] = JSON.parse(window.localStorage.getItem(property))
    );
  }

  private updateLocalStorage(property: string) {
    window.localStorage.setItem(property, JSON.stringify(this[property]));
  }

  public setCampaignSorting(value: CampaignSortParam){
    this.sortCampaignsBy = value;
  }

  public setExcludeOtherUsersCampaigns(value: CampaignSortParam){
    this.sortCampaignsBy = value;
  }
}
