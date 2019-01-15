import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import{Quotes} from '../quotes';

@Component({
  selector: 'app-quoteinfo',
  templateUrl: './quoteinfo.component.html',
  styleUrls: ['./quoteinfo.component.css']
})
export class QuoteinfoComponent implements OnInit {
  EnterQuote:boolean=false;
  newQuote =new Quotes("","",0,0, d)
  @Output() addQuote=new EventEmitter();

  add() {
    this.addQuote.emit(this.newQuote);
    this.newQuote =new Quotes("","",0,0, d)
  }
  public isInvalid=true;
  sub(){
    this.isInvalid=false
  }
  toggle(){
    this.EnterQuote=!this.EnterQuote
  }
  constructor() { }

  ngOnInit() {
  }

}
var today= new Date();
var d= today.toDateString();
