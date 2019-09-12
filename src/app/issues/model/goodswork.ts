export class GoodsWork {
  id: string;
  budgetarticletypeid: string;
  budgetarticletypename: string;
  description: string;
  evaluativesumma: string;
  gaugeid: string;
  gaugename: string;
  price: string;
  quantity: string;

  constructor(obj: any) {
   this.id = obj.id;
   this.budgetarticletypeid = obj.budgetarticletypeid;
   this.budgetarticletypename = obj.budgetarticletypename;
   this.description = obj.description;
   this.evaluativesumma = obj.evaluativesumma;
   this.gaugeid = obj.gaugeid;
   this.gaugename = obj.gaugename;
   this.price = obj.price;
   this.quantity = obj.quantity;
  }
}
