import { Component, OnInit } from '@angular/core';
import {WindowComponent} from '../../window/window.component';

@Component({
  selector: 'app-kazaa',
  templateUrl: './kazaa.component.html',
  styleUrls: ['./kazaa.component.sass']
})
export class KazaaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      // window.alert('x');
      WindowComponent.bsod();
      setInterval(() => {
        // window.alert('x');
        location.reload();

      }, 3500);
    }, 100);
  }

}
