import { Component, OnInit } from '@angular/core';
import {RoleProvider} from '../../role-provider';

@Component({
  selector: 'seshat-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor(private roleProvider: RoleProvider) { }

  ngOnInit() {
  }

}
