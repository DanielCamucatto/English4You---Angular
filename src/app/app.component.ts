import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'english4you';

  public gameInProgress: boolean = true;

  public endGame(type: string): void {
    console.log(type);
    this.gameInProgress = false;
  }
}
