import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})

export class TerminalComponent{

  public caretPosition:number = 0;
  public readableOutput:string = '';
  public lastInput:string = ''
  @Input() userInput:any[] =[];

  // Globaly lisstening to key presses
  @HostListener('window:keyup', ['$event'])

  readInput(event: KeyboardEvent):void{
    // make sure it wont add shift or ctl keys
    if(event.key.length == 1){
      this.userInput.push(event);
    }

    if(event.key === 'Backspace'){
      this.backSpace();
    }

    if(event.key === 'ArrowLeft' || 'ArrowRight'){
      this.navigateCaret(event.key);
    }

    console.log(event.key)
  }

  writeOutput(){
    // Map the value of 'key' to a string
    this.readableOutput = this.userInput.map((item) => {
      return item.key
    }).join('')

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
