import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes';
import { detachEmbeddedView } from '@angular/core/src/view';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  quotes=[
    new Quotes("Old is gold","halkano",0,0, d),
    new Quotes("What goes around, comes around","henry",0,0, d),
    new Quotes("Not all that glitters is gold","kelvin",0,0, d),
    new Quotes("Better late than never","duncun",0,0,d),
    new Quotes("Coding is toothpaste","willliam",0,0, d),
  ]
  addNew(quote) {
    this.quotes.push(quote);
  }
  delete(i) {
    this.quotes.splice(i,1)
  }
  upVote(index) {
    this.quotes[index].upVotes++;
  }
  downVote(index) {
    this.quotes[index].downVotes++;
  }
}
var today= new Date();
var d= today.toDateString();
