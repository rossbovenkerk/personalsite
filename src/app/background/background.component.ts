// import { Component, OnInit } from '@angular/core';
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit
} from '@angular/core';

import {WindowComponent} from '../window/window.component';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.sass']
})
export class BackgroundComponent implements OnInit {

  // constructor() { }

  @ViewChild('windowContainer', { read: ViewContainerRef }) container: any;

  constructor(private resolver: ComponentFactoryResolver) {}


  ngOnInit(): void {
  }

  public launchApplication(windowID: number): void {
    // console.log(windowID);
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(WindowComponent);
    const componentRef: ComponentRef<any> = this.container.createComponent(
      factory
    );
    componentRef.instance.selectedWindowID = windowID;
  }

}
