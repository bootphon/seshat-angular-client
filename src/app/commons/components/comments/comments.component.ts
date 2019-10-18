import {Component, Input, OnInit} from '@angular/core';
import {TaskComment} from '../../../api/models/task-comment';
import {TasksService} from '../../../api/services/tasks.service';

@Component({
  selector: 'seshat-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() commentsList: Array<TaskComment>;
  @Input() taskID: string;
  newCommentContent: string;
  constructor(private tasksAPI: TasksService) { }

  ngOnInit() {
    // TODO: if comment list is none, retrieve the comments list
  }

  submitComment(){
    // TODO
  }

}
