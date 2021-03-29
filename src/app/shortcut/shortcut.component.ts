import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import {Window} from '../window';
import { WINDOWS } from '../windows';
import { WindowComponent } from '../window/window.component';


@Component({
  selector: 'app-shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.sass']
})
export class ShortcutComponent implements OnInit {

  @Output() childEvent = new EventEmitter();

  windows = WINDOWS;
  selectedWindow?: Window;
   // componentRef: ComponentRef<Window>;
  // @ViewChild("windowContainer", { read: ViewContainerRef }) container;

  // constructor(private resolver: ComponentFactoryResolver) { }
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(w: Window): void {
    this.selectedWindow = w;
    w.isOpen = true;

    if (this.selectedWindow) {
      this.childEvent.emit(this.selectedWindow.id);
    }
    console.log('launch application id: ' + this.selectedWindow.id);
  }




}
