import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { LogClicksDirective } from './log-clicks.directive';
import { CapitalisePipe } from './capitalise.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    LogClicksDirective,
    CapitalisePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
