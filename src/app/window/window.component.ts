import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


import {Window} from '../window';
import { WINDOWS } from '../windows';
import { ApplicationsModule } from '../applications/applications.module';

import {ResumeComponent} from '../applications/resume/resume.component';
import {LinkedinComponent} from '../applications/linkedin/linkedin.component';
import {KazaaComponent} from '../applications/kazaa/kazaa.component';

declare function dragElement(param1: string): any;
// declare function dragElement(): any;

@Component({
    selector: 'app-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.sass'],
    standalone: false
})

export class WindowComponent implements OnInit, AfterViewInit {

  windows = WINDOWS;
  selectedWindow?: Window;
  selectedWindowID = 0;

  windowTitle: string;
  cssClass: string ;

  // dynamicMessage = 'xxxxxxxxxxxxxxxxxxxxx';

  // HTML ID of element spawned
  windowID: string = 'window-' + new Date().valueOf().toString();

  // Window is open
  public isWindowOpen = false;



  public static bsod(): void {
    const e = document.getElementById('bsod');
    if (e) {
      e.style.display = 'block';
    }

  }
  constructor() {
    this.windowTitle = '';
    this.cssClass = '';
   }

  // @ViewChild('window') w!: ElementRef;
  ngOnInit(): void {
    this.isWindowOpen = true;

    // get the selected window and load
    this.selectedWindow = this.windows.filter(w => w.id === this.selectedWindowID)[0];
    if (this.selectedWindow) {
      this.windowTitle = this.selectedWindow.title;
      if(this.selectedWindow.cssClass)
        this.cssClass = this.selectedWindow.cssClass;
      
      if(this.selectedWindowID === 3)
        document.getElementById("txtNotepad")?.focus();
    }


  }

  ngAfterViewInit(): void {
    dragElement(this.windowID);

  }

  onSelect(w: Window): void {
    // this.selectedWindow = w;
    this.isWindowOpen = true;
  }

  onMinimize(): void {
    if(this.cssClass !== "minimized")
      this.cssClass = "minimized";
    else
      this.cssClass = "";
    console.log('min');
  }

  onMaximize(): void {
    if(this.cssClass !== "maximized")
      this.cssClass = "maximized";
    else
      this.cssClass = "";
    console.log('maximized');
  }

  onClose(): void {
    console.log('close');
    this.isWindowOpen = false;

  }

  get isOpen(): boolean {
    return this.isWindowOpen;
  }

  set isOpen(val: boolean) {
    this.isWindowOpen = val;
  }





}
