import {Component, Input, OnInit} from '@angular/core';
import {TaskComment} from '../../../api/models/task-comment';
import {TasksService} from '../../../api/services/tasks.service';
import {RoleProvider} from '../../role-provider';
import {ActivatedRoute} from '@angular/router';
import {UserShortProfile} from '../../../api/models/user-short-profile';

@Component({
  selector: 'seshat-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() taskID: string;
  comments: Array<TaskComment> = [];
  newCommentContent: string;
  currentUser: UserShortProfile;
  constructor(
    private tasksService: TasksService,
    private roleProvider: RoleProvider,
    private route: ActivatedRoute
  ) {
    this.currentUser = this.roleProvider.getUserShortProfile();
  }

  ngOnInit() {
    if (!this.taskID) {
      this.taskID = this.route.snapshot.paramMap.get('task_id');
    }
    this.tasksService.tasksCommentTaskIdGet({taskId:this.taskID}).subscribe(
      (data) => {
        this.comments = data;
      }
    );
  }

  submitComment() {
    this.tasksService.tasksCommentTaskIdPost(
      {taskId: this.taskID, body: {content: this.newCommentContent}}
      ).subscribe(
      () => {
        // Append the submitted comment to the comments list
        this.comments.push({
          content: this.newCommentContent,
          author: this.roleProvider.getUserShortProfile(),
          creation: new Date().toLocaleTimeString(),
        } as TaskComment);
        this.newCommentContent = '';
        // TODO : notify (via toast) that comment was added
      }
    );
  }

}
