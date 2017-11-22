export class Administrateur {
  private _id: number;
  private _username: string;
  private _password: string;
  private _email: string;

  constructor(username: string = "unknown", password: string ="unknown", email: string="unknown"){
    this._username = username;
    this._password = password;
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

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  public toString(): string {
    return this._id + ' ' + this._username + ' ' + this._password + ' ' + this._email;
  }

  public static fromJSON(rawJv: any): Administrateur{
    const tmpA = new Administrateur();
    tmpA.id = rawJv['Id'];
    tmpA.username = rawJv['Username'];
    tmpA.password = rawJv['Password'];
    tmpA.email = rawJv['Email'];
    return tmpA;
  }

  public static fromJSONs(rawAdmins: any[]): Administrateur[]{
    return rawAdmins.reduce((admins, currentElement) => {
      admins.push(Administrateur.fromJSON(currentElement));
      return admins;
    }, []);
  }

  public getCleanDataForSending(): any{
    return{
      'Id': this.id,
      'Username': this.username,
      'Password': this.password,
      'Email': this.email
    };
  }
}
