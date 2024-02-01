import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})

export class TerminalComponent{

  public caretPosition:number = 0;
  public readableOutput:any[] = [];
  public lastInput:string = ''
  @Input() userInput:any[] =[];

  // Globaly lisstening to key presses
  @HostListener('window:keyup', ['$event'])

  readInput(event: KeyboardEvent):void{
    // make sure it wont add shift or ctl keys
    if(event.key.length == 1){
      this.userInput.push(event.key);
      if(event.code === 'Space'){
        this.userInput.push('\u00A0');
      }
    }

    if(event.key === 'Backspace'){
      this.backSpace();
    }

    if(event.key === 'ArrowLeft' || 'ArrowRight'){
      this.navigateCaret(event.key);
    }

    console.log(event)
  }

  writeOutput(){
    this.readableOutput = this.userInput;
    return this.readableOutput;
  }

  backSpace(){
    this.userInput.pop();
    this.writeOutput();
  }

  navigateCaret(event:string){
    if(event === 'ArrowLeft'){
      console.log('arrowleft')
    }
  }



}
