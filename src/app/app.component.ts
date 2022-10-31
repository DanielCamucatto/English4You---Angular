import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'english4you';

  public gameInProgress: boolean = true;
  public typeClosure: string;

  public endGame(type: string): void {
    this.gameInProgress = false;
    this.typeClosure = type;
  }

  public restartGame(): void{
    this.gameInProgress = true; 
    this.typeClosure = 'undefined';
  }
}
