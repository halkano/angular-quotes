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
    new Quotes("“Both riches and honor come from you, and you rule over all. ...“","st.paul",0,0, d),
    new Quotes("“But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' ... “","Paul",0,0, d),
    new Quotes("“Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.”","joshua",0,0, d),
    new Quotes("“The name of the LORD is a strong tower; the righteous man runs into it and is safe.”","david",0,0,d),
    new Quotes("“He only is my rock and my salvation, my fortress; I shall not be shaken.”","david",0,0, d),
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
