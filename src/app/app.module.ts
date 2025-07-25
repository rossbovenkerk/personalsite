import { NgModule, provideAppInitializer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { TaskbarComponent } from './taskbar/taskbar.component';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { WindowComponent } from './window/window.component';
import { ShortcutComponent } from './shortcut/shortcut.component';
import { StartmenuComponent } from './startmenu/startmenu.component';
import { BsodComponent } from './bsod/bsod.component';
import { ApplicationsModule } from './applications/applications.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({ declarations: [
        AppComponent,
        BackgroundComponent,
        TaskbarComponent,
        WindowComponent,
        ShortcutComponent,
        StartmenuComponent,
        BsodComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ApplicationsModule,
        BrowserAnimationsModule], providers: [
        provideAppInitializer(() => new Promise(resolve => {
                window.setTimeout(resolve, 3000);
            })),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
