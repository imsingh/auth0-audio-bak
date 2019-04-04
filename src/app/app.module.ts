import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

// all services
import { AudioService } from './services/audio.service';
import { CloudService} from './services/cloud.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AudioService,
    CloudService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
