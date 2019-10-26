import {Component, OnInit} from '@angular/core';
import {AnnotatorCreation} from '../../../api/models/annotator-creation';
import {AnnotatorsService} from '../../../api/services/annotators.service';
import {Router} from '@angular/router';

@Component({
  selector: 'seshat-annotator-creation',
  templateUrl: './annotator-creation.component.html',
  styleUrls: ['./annotator-creation.component.scss']
})
export class AnnotatorCreationComponent implements OnInit {
  annotatorProfile: AnnotatorCreation;
  constructor(private annotatorsService: AnnotatorsService,
              private router: Router) { }

  ngOnInit() {
    this.annotatorProfile = {
      username: '',
      last_name: '',
      first_name: '',
      password: '',
      email: ''
    };
  }
  createAnnotator() {
    this.annotatorsService.annotatorsManagePost({body: this.annotatorProfile}).subscribe(
      (data) => {
        this.router.navigate(['/admin', 'annotators']);
        // TODO  add a toast confirming creation
      }
    );
  }

}
