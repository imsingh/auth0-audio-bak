import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PlayerComponent } from './pages/player/player.component';

// modules
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

// all services
import { AudioService } from './services/audio.service';
import { CloudService} from './services/cloud.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    AudioService,
    CloudService,
    AuthService,
    AuthGuard
  ],
  entryComponents: [
    PlayerComponent,
    ProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
