import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-change',
  templateUrl: './username-change.component.html',
  styleUrls: ['./username-change.component.scss']
})
export class UsernameChangeComponent implements OnInit {
  username: string;
  constructor() { }

  ngOnInit(): void {
  }

  onUsernameSubmit() {
    this.username = '';
  }

}
