import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-startmenu',
    templateUrl: './startmenu.component.html',
    styleUrls: ['./startmenu.component.sass'],
    standalone: false
})
export class StartmenuComponent implements OnInit {
  @Input() showStart: boolean = true;
 

  constructor() { 
    //this.showStart = false;
  }

  ngOnInit(): void {
  }

  

}
