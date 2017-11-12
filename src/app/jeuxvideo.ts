export class Jeuxvideo {
  private _id : string;
  private _nom : string;
  private _editeur : string;
  private _types: string[] = [];
  private _developpeur : string;
  private _sortie : Date = new Date();
  private _genres : string[] = [];
  private _theme : string;
  private _prix : number;
  private _description : string;


  constructor(nom: string, editeur: string, types: string[], developpeur: string, sortie: Date, genres: string[], theme: string, prix: number, description: string) {
    this._nom = nom;
    this._editeur = editeur;
    this._types = types;
    this._developpeur = developpeur;
    this._sortie = sortie;
    this._genres = genres;
    this._theme = theme;
    this._prix = prix;
    this._description = description;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
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

  get types(): string[] {
    return this._types;
  }

  set types(value: string[]) {
    this._types = value;
  }

  get developpeur(): string {
    return this._developpeur;
  }

  set developpeur(value: string) {
    this._developpeur = value;
  }

  get sortie(): Date {
    return this._sortie;
  }

  set sortie(value: Date) {
    this._sortie = value;
  }

  get genres(): string[] {
    return this._genres;
  }

  set genres(value: string[]) {
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

  public toString(): string {
    return this._id+" "+this._nom+" "+this._prix+" "+this._description;
  }

}
