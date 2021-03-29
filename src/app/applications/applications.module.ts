import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { NotepadComponent } from './notepad/notepad.component';



@NgModule({
  declarations: [ResumeComponent, LinkedinComponent, NotepadComponent],
  imports: [
    CommonModule
  ],
  exports: [ResumeComponent, LinkedinComponent, NotepadComponent]
})
export class ApplicationsModule { }
