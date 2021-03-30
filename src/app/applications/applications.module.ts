import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { NotepadComponent } from './notepad/notepad.component';
import { KazaaComponent } from './kazaa/kazaa.component';



@NgModule({
  declarations: [ResumeComponent, LinkedinComponent, NotepadComponent, KazaaComponent],
  imports: [
    CommonModule
  ],
  exports: [ResumeComponent, LinkedinComponent, NotepadComponent, KazaaComponent]
})
export class ApplicationsModule { }
