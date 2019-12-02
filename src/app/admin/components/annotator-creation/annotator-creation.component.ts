import {Component, OnInit} from '@angular/core';
import {AnnotatorCreation} from '../../../api/models/annotator-creation';
import {AnnotatorsService} from '../../../api/services/annotators.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'seshat-annotator-creation',
  templateUrl: './annotator-creation.component.html',
  styleUrls: ['./annotator-creation.component.scss']
})
export class AnnotatorCreationComponent implements OnInit {
  hide = true;
  isValid = false;
  private userCreationForm: FormGroup;

  constructor(
    private annotatorsService: AnnotatorsService,
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.userCreationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    // const s = this.userCreationForm.value.firstname;
  }

  ngOnInit() {
  }

  createAnnotator() {
    const annotatorProfile = {
      username: this.userCreationForm.get('username').value,
      password: this.userCreationForm.get('password').value,
      first_name: this.userCreationForm.get('firstName').value,
      last_name: this.userCreationForm.get('lastName').value,
      email: this.userCreationForm.get('email').value,
    } as AnnotatorCreation;
    this.annotatorsService.annotatorsManagePost({body: annotatorProfile}).subscribe(
      (data) => {
        this.router.navigate(['/admin', 'annotators']);
        this.snackBar.open(`Annotator ${annotatorProfile.username} created`, 'Annotator Creation',
          {verticalPosition: 'top', duration: 3 * 1000});
      }
    );
  }

}
