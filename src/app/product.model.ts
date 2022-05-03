export class Product{
  constructor(
    public name:string,
    public price:number,
    public sale:number,
    public imagePath:string,
    public desc:string,
    public id:number,
   public brand:string,
   public amontLeft:number,
   public progress :number,
   public isFlashSale:boolean,
   public isMothDay :boolean,
   public top:boolean ){

  }
}
