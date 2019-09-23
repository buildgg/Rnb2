export class IssueView {
  public univid: string;
  public id: string;
  public issueno: string;
  public budgetdate: Date;
  public issuer: string;
  public svodno: string;
  public currolename: string;
  public svoddate: string;
  public description: string;
  public justification: string;
  public budgetArticleTypesname: string;
  public site: string;

  constructor(obj: any) {
    this.id = obj.id;
    this.univid = obj.univid;
    this.issueno = obj.issueno;
    this.budgetdate = obj.budgetdate;
    this.issuer = obj.issuer;
    this.svodno = obj.svodno;
    this.currolename = obj.currolename;
    this.svoddate = obj.svoddate;
    this.description = obj.description;
    this.justification = obj.justification;
    this.budgetArticleTypesname = obj.budgetarticletypesname;
    this.site = obj.siteid;
  }
}
