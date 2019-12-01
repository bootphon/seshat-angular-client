import {Component, Input, OnInit} from '@angular/core';
import {AnnotatorsService} from '../../../api/services/annotators.service';
import {AnnotatorProfile} from '../../../api/models/annotator-profile';
import {ActivatedRoute, Router} from '@angular/router';
import {AnnotatorEdition} from '../../../api/models/annotator-edition';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ConfirmationDialogComponent} from '../../../commons/components/confirmation-dialog/confirmation-dialog.component';

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
  hide = true;

  constructor(
    private annotatorsService: AnnotatorsService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    if (!this.username) {
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
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: `Do you confirm the deletion of user ${this.annotatorProfile.username}?`
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.annotatorsService.annotatorsManageDelete({body: {username: this.username}}).subscribe(
            () => {
              this.snackBar.open('Annotator successfully removed from database', 'Annotator Deletion',
                {verticalPosition: 'top', duration: 3 * 1000});
              this.router.navigate(['/admin', 'annotators']);
            }
          );
        }
      }
    );

  }

  updateAnnotatorProfile() {
    this.annotatorsService.annotatorsManagePut({body: this.annotatorProfileEdit}).subscribe(
      () => {
        this.snackBar.open('Annotator\'s profile successfully updated', 'Annotator Profile Update',
          {verticalPosition: 'top', duration: 3 * 1000});
      }
    );
  }

  updateAnnotatorLock() {
    this.annotatorsService.annotatorsLockPost(
      {body: {username: this.username, lock_status: !this.annotatorProfile.is_locked}}
    ).subscribe(
      () => {
        this.annotatorProfile.is_locked = !this.annotatorProfile.is_locked;
      }
    );
  }

  updatePassword() {
    this.annotatorsService.annotatorsPasswordChangePost(
      {body: {username: this.username, password: this.newPassword}}
    ).subscribe(
      () => {
        this.snackBar.open('Password successfully updated!', 'Annotator Password Update',
          {verticalPosition: 'top', duration: 3 * 1000});
        this.newPassword = '';
      }
    );
  }
}
