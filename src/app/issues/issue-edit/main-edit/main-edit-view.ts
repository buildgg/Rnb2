import {GoodsWork} from '../../model/goodswork';

export class MainEditView {
  public univid: string;
  public id: string;
  public issueno: string;
  public budgetdate: string;
  public issuer: string;
  public svodid: string;
  public currolename: string;
  public svoddate: string;
  public svodname: string;
  public description: string;
  public justification: string;
  public budgetArticleType: string;
  public budgetArticle: string;
/*  public responsiblecenter: string;*/
  public issueState: string;
  public site: string;
  public summa: string;
  public goodsworks: GoodsWork[];

  constructor(obj: any) {
     if (obj !== null) {
       this.univid = obj.univid;
       this.id = obj.id;
       this.issueno = obj.issueno;
       this.budgetdate = obj.budgetdate;
       this.issuer = obj.issuer;
       this.svodid = obj.svodid;
       this.currolename = obj.currolename;
       this.svoddate = obj.svoddate;
       this.svodname = obj.svod;
       this.description = obj.description;
       this.justification = obj.justification;
       this.budgetArticleType = obj.budgetarticletypeid;
       this.budgetArticle = obj.budgetarticleid;
       this.issueState = obj.issuestatename;
       this.site = obj.siteid;
       this.summa = obj.amount;
       this.goodsworks = obj.goodsworkslist;
     }
  }

}

/*this.responsiblecenter = obj.RESPONSIBLECENTER;*/
/* this.excessSumma = obj.EXCESSSUMMA;*/


