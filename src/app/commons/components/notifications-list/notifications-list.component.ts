import {Component, OnInit} from '@angular/core';
import {NotificationData} from '../../../api/models/notification-data';
import {AccountsService} from '../../../api/services/accounts.service';

@Component({
  selector: 'seshat-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent implements OnInit {
  notifList: Array<NotificationData>;
  constructor(private accountsAPI: AccountsService) { }

  ngOnInit() {
  }
  deleteNotif(notif: NotificationData){}

}
