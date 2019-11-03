import {Component, OnInit} from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {TasksService} from '../../../api/services/tasks.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleProvider} from '../../../commons/role-provider';
import {CampaignStatus} from '../../../api/models/campaign-status';

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
              private roleProvider: RoleProvider,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const campaignSlug: string = this.route.snapshot.paramMap.get('campaign_slug');
    this.campaignsService.campaignsViewCampaignSlugGet({campaignSlug}).subscribe(
      (data) => {
        this.campaign = data;
        this.currentUserIsSubscriber = this.campaign.subscribers.includes(
          this.roleProvider.getUserName()
        );
      }
    );
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

}
