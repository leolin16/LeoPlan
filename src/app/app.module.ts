import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LeoComponent } from './leo.component';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav.component';
import { HowtoComponent } from './howto/howto.component';
import { ExamplesComponent } from './examples/examples.component';
import { routes } from './app.routes';


// Content Components
import { MessageComponent } from './shared/components/content/message/message.component';
import { IframepageComponent } from './iframepage/iframepage.component';

@NgModule({
  declarations: [
    LeoComponent,
    AppComponent,
    AppNavComponent,
    HowtoComponent,
    ExamplesComponent,
    MessageComponent,
    IframepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [LeoComponent]
})
export class AppModule { }
