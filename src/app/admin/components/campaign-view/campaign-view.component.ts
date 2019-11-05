import {Component, OnInit} from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {TasksService} from '../../../api/services/tasks.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleProvider} from '../../../commons/role-provider';
import {CampaignStatus} from '../../../api/models/campaign-status';
import {DownloadsService} from '../../../api/services/downloads.service';

@Component({
  selector: 'seshat-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.scss']
})
export class CampaignViewComponent implements OnInit {
  campaign: CampaignStatus;
  currentUserIsSubscriber: boolean;
  constructor(private campaignsService: CampaignsService,
              private tasksService: TasksService,
              private downloadService: DownloadsService,
              private roleProvider: RoleProvider,
              private route: ActivatedRoute,
              private router: Router)
  {}

  loadCampaignData(slug: string) {
    this.campaignsService.campaignsViewCampaignSlugGet({campaignSlug: slug}).subscribe(
      (data) => {
        this.campaign = data;
        this.currentUserIsSubscriber = this.campaign.subscribers.includes(
          this.roleProvider.getUserName()
        );
      }
    );
  }

  ngOnInit() {
    const campaignSlug: string = this.route.snapshot.paramMap.get('campaign_slug');
    this.loadCampaignData(campaignSlug);
    // subscribing to the route change in case the user switches campaigns in the menu
    this.route.params.subscribe(params => {
      const slug = params['campaign_slug'];
      this.loadCampaignData(slug); // reset and set based on new parameter this time
    });
  }

  changeFollowState() {
    this.campaignsService.campaignsSubscribePost(
      { body : {slug : this.campaign.slug,
          subscription_status: !this.currentUserIsSubscriber}}).subscribe(
      () => {
        this.currentUserIsSubscriber = !this.currentUserIsSubscriber;
        // TODO : display toast
      }
    );
  }
  deleteCampaign() {
    this.campaignsService.campaignsAdminDelete({body: {slug: this.campaign.slug}}).subscribe(
      () => {
        // TODO : display toast to validate
        this.router.navigate(['/admin']);
      }
    );
  }

  getCampaignArchive() {
    this.downloadService.downloadsCampaignArchiveCampaignSlugGet({campaignSlug: this.campaign.slug}).subscribe(
      (data) => {

      }
    );
  }

}
