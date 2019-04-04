import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  files: Array<any> = [
    { name: 'First Song', artist: 'Inder' },
    { name: 'Second Song', artist: 'You' }
  ];
  state;
  currentFile: any = {};

  isFirstPlaying() {
    return false;
  }
  isLastPlaying() {
    return true;
  }
}


