import {Component, Input, OnInit} from '@angular/core';
import {AnnotatorsService} from '../../../api/services/annotators.service';
import {AnnotatorProfile} from '../../../api/models/annotator-profile';
import {ActivatedRoute, Router} from '@angular/router';
import {AnnotatorEdition} from '../../../api/models/annotator-edition';

@Component({
  selector: 'seshat-annotators-view',
  templateUrl: './annotators-view.component.html',
  styleUrls: ['./annotators-view.component.scss']
})
export class AnnotatorsViewComponent implements OnInit {
  @Input() username: string;
  annotatorProfile: AnnotatorProfile;
  annotatorProfileEdit: AnnotatorEdition;
  newPassword: string;
  constructor(
    private annotatorsService: AnnotatorsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.username){
      this.username = this.route.snapshot.paramMap.get('username');
    }
    this.annotatorsService.annotatorsViewUsernameGet({username: this.username}).subscribe(
      (data) => {
        this.annotatorProfile = data;
        this.annotatorProfileEdit = {
          username: this.annotatorProfile.username,
          first_name: this.annotatorProfile.first_name,
          last_name: this.annotatorProfile.last_name,
          email: this.annotatorProfile.email
        } as AnnotatorEdition;
      }
    );

  }
  deleteAnnotator() {
    this.annotatorsService.annotatorsManageDelete({body: {username: this.username}}).subscribe(
      () => {
        // TODO display toast to indicate validtion
        this.router.navigate(['/admin', 'annotators']);
      }
    );
  }
  updateAnnotatorProfile() {
    this.annotatorsService.annotatorsManagePut({body: this.annotatorProfileEdit}).subscribe(
      () => {
        // TODO : display toast to indicate success
      }
    );
  }
  updateAnnotatorLock() {
    this.annotatorsService.annotatorsLockPost(
      {body: {username: this.username, lock_status: !this.annotatorProfile.is_locked }}
      ).subscribe(
      () => {
        this.annotatorProfile.is_locked = !this.annotatorProfile.is_locked;
      }
    );
  }
  updatePassword(){
    this.annotatorsService.annotatorsPasswordChangePost(
      {body: {username: this.username, password: this.newPassword}}
      ).subscribe(
      () => {
        // TODO : display toast
        this.newPassword = '';
      }
    )
  }
}
