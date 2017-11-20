export class Magasinier {
  private _id: number;
  private _username: string;
  private _password: string;
  private _tel: string;
  private _email: string;

  constructor(username: string = 'unknown', password: string= 'unknown', tel: string= 'unknown', email: string= 'unknown'){
    this._username = username;
    this._password = password;
    this._tel = tel;
    this._email = email;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get tel(): string {
    return this._tel;
  }

  set tel(value: string) {
    this._tel = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  public toString(): string {
    return this._id+" "+this._username+" "+this._password+" "+this._tel+" "+this._email;
  }

  public static fromJSON(rawJv:any): Magasinier{
    const tmpM = new Magasinier();
    tmpM.id = rawJv["Id"];
    tmpM.username = rawJv["Username"];
    tmpM.password = rawJv["Password"];
    tmpM.tel = rawJv["Tel"];
    tmpM.email = rawJv["Email"];
    return tmpM;
  }

  public static fromJSONs(rawJvs:any[]): Magasinier[]{
    return rawJvs.reduce((mags,currentElement)=>{
      mags.push(Magasinier.fromJSON(currentElement));
      return mags;
    }, []);
  }

  public getCleanDataForSending(): any{
    return{
      "Id": this.id,
      "Username":this.username,
      "Password":this.password,
      "Tel":this.tel,
      "Email":this.email,

    };
  }

}
