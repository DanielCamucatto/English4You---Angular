import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { phrase } from '../shared/phrase.model';
import { phrases } from  './phrases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public phrasesArr: phrase[] = phrases; 
  public instruction: string = ' Traduza a frase';
  public answer: string = '';

  public round: number = 0; 
  public roundPhrase:phrase;
  public progress: number = 0;

  public attemps: number = 3; 

  @Output() public endGame: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.updateRounded()
  }

  
  ngOnInit(): void {}
  ngOnDestroy() {
    console.log('componente painel foi destruido');
    
  }

  public updateAnswer(answer: Event): void{
    this.answer = (<HTMLInputElement>answer.target).value;
  }

  public checkAnswer(): void {
    if(this.roundPhrase.phraseBr !== this.answer){
      this.updateRounded()
      this.attemps--;
      if(this.attemps === -1){
        this.endGame.emit('Defeat')
      }
      
    }else{
      
     
      this.progress = this.progress + (100 / this.phrasesArr.length); 
      this.round++;
      this.updateRounded();
      if(this.round === 4){
       this.endGame.emit('Victory');
      }
     
    }
  }

  public updateRounded(): void  {
    this.roundPhrase = this.phrasesArr[this.round]; 
    this.answer = '';
    console.log(this.answer);
  }

}
