import {Component, OnInit} from '@angular/core';
import {RoleProvider} from '../../role-provider';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {NavigationEnd, Router} from '@angular/router';
import {AccountsService} from '../../../api/services/accounts.service';
import {CampaignStatus} from '../../../api/models/campaign-status';
import {UserShortProfile} from '../../../api/models/user-short-profile';
import {SeshatEventsService} from '../../seshat-events.service';
import {NotificationData} from '../../../api/models/notification-data';
import {DisplayPrefService} from '../../display-pref.service';

@Component({
  selector: 'seshat-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  campaignsData: Array<CampaignStatus>;
  userData: UserShortProfile;
  notifList: NotificationData[] = [];
  iconMap = new Map([
    [ 'assignment', 'assignment_returned'],
    [ 'comment', 'insert_comment' ],
    [ 'upload', 'publish' ],
    [ 'finished', 'assignment_turned_in'],
    [ 'alert', 'assignment_late' ],
  ]);
  // only used when the user is an admin

  constructor(
    private roleProvider: RoleProvider,
    private campaignsService: CampaignsService,
    private accountsService: AccountsService,
    private eventsService: SeshatEventsService,
    private displayPref: DisplayPrefService,
    private router: Router) {
    this.campaignsData = [];
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActivatedMenuItem(event);
      }
    });
    if (this.roleProvider.isLogged()) {
      this.loadProfileData();
    }

    this.eventsService.logInEvent.subscribe((loggedIn) => {
      if (loggedIn) {
        this.loadProfileData();
      }
    });
    this.eventsService.campaignsChange.subscribe(() =>{
      this.loadCampaignsList();
    });
    this.eventsService.campaignsDisplayChange.subscribe(() =>{
      this.loadCampaignsList();
    });

  }

  loadProfileData() {
    this.roleProvider.getUserData().then((data) => this.userData = data);
    this.loadCampaignsList();
    this.accountsService.accountsNotificationsGet().subscribe(
      (data) => this.notifList = data
    );
  }

  loadCampaignsList() {
    if (this.roleProvider.isAdmin()) {
      this.campaignsService.campaignsListGet().subscribe(
        (data) => {
          this.campaignsData = this.displayPref.sortDataBasedOnPref(data);
        }
      );
    }
  }

  updateActivatedMenuItem(event: NavigationEnd) {
    // TODO
  }

  deleteNotif(notif: NotificationData) {
    this.accountsService.accountsNotificationsDelete({body: {notif_id: notif.notid_id}})
      .subscribe(() => {
        const index = this.notifList.indexOf(notif);

        if (index >= 0) {
          this.notifList.splice(index, 1);
        }
      });

  }

  reachNotification(notif: NotificationData){
    // deleting the notification
    this.deleteNotif(notif);
    let route: string[];
    switch (notif.object_type) {
      case 'task':
        if (this.roleProvider.isAdmin()){
          route = ['/admin', 'tasks', 'view', notif.object_id];
        } else if (this.roleProvider.isAnnotator()) {
          route = ['/annotator', 'task', notif.object_id];
        }
        break;
      case 'user':
        route = ['/admin', 'annotators', 'view', notif.object_id];
        break;
      case 'campaign':
        route = ['/admin', 'campaign', notif.object_id];
        break;
      case 'dasboard':
        if (this.roleProvider.isAdmin()) {
          route = ['/admin', 'campaign', 'list'];
        } else if (this.roleProvider.isAnnotator()) {
          route = ['/annotator', 'tasks'];
        }
        break;
    }
    this.router.navigate(route);
  }


  logout() {
    this.roleProvider.logout();
    this.router.navigate(['/login']);
  }

}
