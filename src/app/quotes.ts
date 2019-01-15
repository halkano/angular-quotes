export class Quotes {
  quotes:string[];

   constructor(public quote:string,
      public author:string,
       public upVotes:number,
       public downVotes:number,
       public submitDate){

  }
}
