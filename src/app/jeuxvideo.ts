export class Jeuxvideo {
  private _id : number;
  private _nom : string;
  private _editeur : string;
  private _types: string;
  private _developpeur : string;
  private _sortie : string;
  private _genres : string;
  private _theme : string;
  private _prix : number;
  private _description : string;
  private _urlImage : string;


  constructor(nom: string = 'unknown', editeur: string= 'unknown', types: string= 'unknown', developpeur: string= 'unknown', sortie: string = 'unknown', genres: string = 'unknown', theme: string = 'unknown', prix: number = 0.0, description: string = 'unknown',urlImage: string ='https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg') {
    this._nom = nom;
    this._editeur = editeur;
    this._types = types;
    this._developpeur = developpeur;
    this._sortie = sortie;
    this._genres = genres;
    this._theme = theme;
    this._prix = prix;
    this._description = description;
    this._urlImage = urlImage;
  }




  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get editeur(): string {
    return this._editeur;
  }

  set editeur(value: string) {
    this._editeur = value;
  }

  get types(): string {
    return this._types;
  }

  set types(value: string) {
    this._types = value;
  }

  get developpeur(): string {
    return this._developpeur;
  }

  set developpeur(value: string) {
    this._developpeur = value;
  }

  get sortie(): string{
    return this._sortie;
  }

  set sortie(value: string) {
    this._sortie = value;
  }

  get genres(): string {
    return this._genres;
  }

  set genres(value: string) {
    this._genres = value;
  }

  get theme(): string {
    return this._theme;
  }

  set theme(value: string) {
    this._theme = value;
  }

  get prix(): number {
    return this._prix;
  }

  set prix(value: number) {
    this._prix = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get urlImage(): string {
    return this._urlImage;
  }

  set urlImage(value: string) {
    this._urlImage= value;
  }

  public toString(): string {
    return this._id+" "+this._nom+" "+this._prix+" "+this._description;
  }

  public static fromJSON(rawJv:any): Jeuxvideo{
    const tmpJv = new Jeuxvideo();
    tmpJv.id = rawJv["Id"];
    tmpJv.nom = rawJv["Nom"];
    tmpJv.editeur = rawJv["Editeur"];
    tmpJv.types = rawJv["Types"];
    tmpJv.developpeur = rawJv["Developpeur"];
    tmpJv.sortie = rawJv["Sortie"];
    tmpJv.genres = rawJv["Genres"];
    tmpJv.theme = rawJv["Theme"];
    tmpJv.prix = rawJv["Prix"];
    tmpJv.description = rawJv["Description"];
    tmpJv.urlImage = rawJv["UrlImage"];
    return tmpJv;
  }

  public static fromJSONs(rawJvs:any[]): Jeuxvideo[]{
    return rawJvs.reduce((jvs,currentElement)=>{
      jvs.push(Jeuxvideo.fromJSON(currentElement));
      return jvs;
    }, []);
  }

  public getCleanDataForSending(): any{
    return{
      "Id": this.id,
      "Nom":this.nom,
      "Editeur":this.editeur,
      "Types":this.types,
      "Developpeur":this.developpeur,
      "Sortie":this.sortie,
      "Genres":this.genres,
      "Theme":this.theme,
      "Prix":this.prix,
      "Description":this.description,
      "UrlImage":this.urlImage
    };
  }

}
