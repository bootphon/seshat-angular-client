import {Component, OnInit} from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {TasksService} from '../../../api/services/tasks.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleProvider} from '../../../commons/role-provider';
import {CampaignStatus} from '../../../api/models/campaign-status';
import {MatDialog, MatSnackBar} from '@angular/material';
import {SeshatEventsService} from '../../../commons/seshat-events.service';
import {DownloadsService} from '../../../api/services';
import {CheckingSchemeSummary} from '../../../api/models/checking-scheme-summary';
import {ConfirmationDialogComponent} from '../../../commons/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'seshat-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.scss']
})
export class CampaignViewComponent implements OnInit {
  campaign: CampaignStatus;
  checkingScheme: CheckingSchemeSummary;
  currentUserIsSubscriber: boolean;

  constructor(private campaignsService: CampaignsService,
              private tasksService: TasksService,
              private downloadService: DownloadsService,
              private eventsService: SeshatEventsService,
              private roleProvider: RoleProvider,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  loadCampaignData(slug: string) {
    this.campaignsService.campaignsViewCampaignSlugGet({campaignSlug: slug}).subscribe(
      (data) => {
        this.campaign = data;
        this.currentUserIsSubscriber = this.campaign.subscribers.includes(
          this.roleProvider.getUserName()
        );
        this.campaignsService.campaignsCheckingSchemeCampaignSlugGet({campaignSlug: this.campaign.slug}).subscribe(
          (scheme) => {
            console.log(scheme);
            this.checkingScheme = scheme;
          }
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
      {
        body: {
          slug: this.campaign.slug,
          subscription_status: !this.currentUserIsSubscriber
        }
      }).subscribe(
      () => {
        this.currentUserIsSubscriber = !this.currentUserIsSubscriber;
        this.snackBar.open(this.currentUserIsSubscriber ?
          'You are now subscribed to this campaign\'s updates' :
          'You are now unsubscribed from this campaign\'s updates',
          'Campaign Subscription',
          {verticalPosition: 'top', duration: 3 * 1000});
      }
    );
  }

  deleteCampaign() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: `Do you confirm the deletion of campaign ${this.campaign.name}?`
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.campaignsService.campaignsAdminDelete({body: {slug: this.campaign.slug}}).subscribe(
            () => {
              this.snackBar.open(`Campaign "${this.campaign.name}" was deleted`, 'Campaign Deletion',
                {verticalPosition: 'top', duration: 3 * 1000});
              this.eventsService.campaignsChange.emit();
              this.router.navigate(['/admin']);
            }
          );
        }
      }
    );
  }

  getCampaignArchive() {
    this.downloadService.downloadsCampaignArchiveCampaignSlugGet({campaignSlug: this.campaign.slug}).subscribe();
  }

}
