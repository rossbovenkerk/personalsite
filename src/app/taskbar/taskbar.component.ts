import { Component, OnInit } from '@angular/core';
import { TaskbarService } from '../taskbar/taskbar.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
    selector: 'app-taskbar',
    templateUrl: './taskbar.component.html',
    styleUrls: ['./taskbar.component.sass'],
    standalone: false
})

export class TaskbarComponent implements OnInit {

  showStartMenu = false;
  currentdate: Date = new Date();

  isNetworkActivity = true;

  constructor(public taskbarService: TaskbarService) { }

  ngOnInit(): void {

    setInterval(() => {
      this.getTime();
    }, 10000);

    setInterval(() => {
      if (this.randomNetworkActivity()) {
        this.toggleNetworkActivity();
      }
    }, 700);

  }

  toggleStartMenu(): void {
    this.showStartMenu = !this.showStartMenu;
  }

  getTime(): void {
    this.currentdate = this.taskbarService.getTime();
  }

  toggleNetworkActivity(): void {
    this.isNetworkActivity = !this.isNetworkActivity;
  }


  randomNetworkActivity(): boolean {
    return Math.floor(Math.random() * Math.floor(10)) > 7;
  }

}
