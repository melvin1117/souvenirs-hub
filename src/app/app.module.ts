import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Module imports
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Service imports
import { MockDataService } from './configs/mock-services/mock-data.service';

// Component imports
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockDataService, { delay: 1000 }),
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
