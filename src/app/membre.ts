export class Membre {
  private _id: number;
  private _username: string;
  private _password: string;
  private _nom: string;
  private _prenom: string;
  private _dateDeNaissance: string;
  private _email: string;
  private _tel: string;
  private _localite: string;
  private _cp: number;
  private _adresse: string;

  constructor(username: string = 'unknown', password: string= 'unknown', nom: string= 'unknown',
              prenom: string= 'unknown', dateDeNaissance: string= 'unknown', email: string= 'unknown',
              tel: string= 'unknown', localite: string= 'unknown', cp: number= -1, adresse: string= 'unknown', ) {
    this._username = username;
    this._password = password;
    this._nom = nom;
    this._prenom = prenom;
    this._dateDeNaissance = dateDeNaissance;
    this._email = email;
    this._tel = tel;
    this._localite = localite;
    this._cp = cp;
    this._adresse = adresse;
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

  get nom(): string{
    return this._nom;
  }

  set nom(value: string){
    this._nom = value;
  }

  get prenom(): string{
    return this._prenom;
  }

  set prenom(value: string){
    this._prenom = value;
  }

  get dateDeNaissance(): string{
    return this._dateDeNaissance;
  }

  set dateDeNaissance(value: string){
    this._dateDeNaissance = value;
  }

  get localite(): string {
    return this._localite;
  }

  set localite(value: string) {
    this._localite = value;
  }

  get cp(): number {
    return this._cp;
  }

  set cp(value: number) {
    this._cp = value;
  }

  get adresse(): string {
    return this._adresse;
  }

  set adresse(value: string) {
    this._adresse = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get tel(): string {
    return this._tel;
  }

  set tel(value: string) {
    this._tel = value;
  }

  public toString(): string {
    return this._id+" "+this._username+" "+this._password+" "+this._nom+" "+this._prenom+" "+this._dateDeNaissance+" "+
      this._email+" "+this._tel+" "+this._localite+" "+this._cp+" "+this._adresse;
  }

  public static fromJSON(rawJv:any): Membre{
    const tmpM = new Membre();
    tmpM.id = rawJv["Id"];
    tmpM.username = rawJv["Username"];
    tmpM.password = rawJv["Password"];
    tmpM.nom = rawJv["Nom"];
    tmpM.prenom = rawJv["Prenom"];
    tmpM.dateDeNaissance = rawJv["DateDeNaissance"];
    tmpM.email = rawJv["Email"];
    tmpM.tel = rawJv["Tel"];
    tmpM.localite = rawJv["Localite"];
    tmpM.cp = rawJv["cp"];
    tmpM.adresse = rawJv["Adresse"];
    return tmpM;
  }

  public static fromJSONs(rawJvs:any[]): Membre[]{
    return rawJvs.reduce((mags,currentElement)=>{
      mags.push(Membre.fromJSON(currentElement));
      return mags;
    }, []);
  }

  public getCleanDataForSending(): any{
    return{
      "Id": this.id,
      "Username":this.username,
      "Password":this.password,
      "Nom":this.nom,
      "Prenom":this.prenom,
      "DateDeNaissance":this.dateDeNaissance,
      "Email":this.email,
      "Tel":this.tel,
      "Localite":this.localite,
      "Cp":this.cp,
      "Adresse":this.adresse
    };
  }

}
