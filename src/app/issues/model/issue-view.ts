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
    this.id = obj.ID;
    this.univid = obj.UNIVID;
    this.issueno = obj.ISSUENO;
    this.budgetdate = obj.BUDGETDATE;
    this.issuer = obj.ISSUER;
    this.svodno = obj.SVODNO;
    this.currolename = obj.CURROLENAME;
    this.svoddate = obj.SVODDATE;
    this.description = obj.DESCRIPTION;
    this.justification = obj.JUSTIFICATION;
    this.budgetArticleTypesname = obj.BUDGETARTICLETYPESNAME;
    this.site = obj.SITEID;
  }
}
