import {Membre} from './membre';
import {Jeuxvideo} from './jeuxvideo';

export class ReservationEnCours {
  private _idReservation: string;
  private _dateReservation: string;
  private _dateLivraison: string;
  private _prixAchat: number;
  private _etat: string;
  private _idMembre: number;
  private _idJeuVideo: number;
  private _membre : Membre;
  private _jeuxvideo : Jeuxvideo;

  constructor(dateReservation: string = "unknown", dateLivraison: string = "unknown", prixAchat: number = 0.00, etat: string = "En traitement...", idMembre: number = 0, idJeuVideo: number = 0,member: Membre = null,jv : Jeuxvideo = null) {
    this._dateReservation = dateReservation;
    this._dateLivraison = dateLivraison;
    this._prixAchat = prixAchat;
    this._etat = etat;
    this._idMembre = idMembre;
    this._idJeuVideo = idJeuVideo;
    this._membre = member;
    this._jeuxvideo = jv;

  }



  get idReservation(): string {
    return this._idReservation;
  }

  set idReservation(value: string) {
    this._idReservation = value;
  }

  get dateReservation(): string {
    return this._dateReservation;
  }

  set dateReservation(value: string) {
    this._dateReservation = value;
  }

  get dateLivraison(): string {
    return this._dateLivraison;
  }

  set dateLivraison(value: string) {
    this._dateLivraison = value;
  }

  get prixAchat(): number {
    return this._prixAchat;
  }

  set prixAchat(value: number) {
    this._prixAchat = value;
  }

  get etat(): string {
    return this._etat;
  }

  set etat(value: string) {
    this._etat = value;
  }

  get idMembre(): number {
    return this._idMembre;
  }

  set idMembre(value: number) {
    this._idMembre = value;
  }

  get idJeuVideo(): number {
    return this._idJeuVideo;
  }

  set idJeuVideo(value: number) {
    this._idJeuVideo = value;
  }

  get membre(): Membre{
    return this._membre;
  }

  set membre(value: Membre) {
    this._membre = value;
  }

  get jeuxvideo(): Jeuxvideo {
    return this._jeuxvideo;
  }

  set jeuxvideo(value: Jeuxvideo) {
    this._jeuxvideo = value;
  }

  public toString(): string {
    return this._idReservation+" "+this._dateReservation+" "+this._dateLivraison+" "+this._etat+" "+this._prixAchat+" "+this._idMembre+" "+this._idJeuVideo;
  }

  public static fromJSON(rawJv:any): ReservationEnCours{
    const tmpRF = new ReservationEnCours();
    tmpRF.idReservation = rawJv["IdReservation"];
    tmpRF.dateReservation = rawJv["DateReservation"];
    tmpRF.dateLivraison = rawJv["DateLivraison"];
    tmpRF.prixAchat = rawJv["PrixAchat"];
    tmpRF.etat = rawJv["Etat"];
    tmpRF.idMembre = rawJv["IdMembre"];
    tmpRF.idJeuVideo = rawJv["IdJeuxVideo"];
    tmpRF.membre = ReservationEnCours.MemberFromJSON(rawJv["Memb"]);
    tmpRF.jeuxvideo = ReservationEnCours.JvFromJSON(rawJv["Jv"]);
    return tmpRF;
  }

  public static MemberFromJSON(rawJv:any): Membre{
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
    tmpM.cp = rawJv["Cp"];
    tmpM.adresse = rawJv["Adresse"];
    return tmpM;
  }

  public static JvFromJSON(rawJv: any): Jeuxvideo{
    const tmpJv = new Jeuxvideo();
    tmpJv.id = rawJv['Id'];
    tmpJv.nom = rawJv['Nom'];
    tmpJv.editeur = rawJv['Editeur'];
    tmpJv.types = rawJv['Types'];
    tmpJv.developpeur = rawJv['Developpeur'];
    tmpJv.sortie = rawJv['Sortie'];
    tmpJv.genres = rawJv['Genres'];
    tmpJv.theme = rawJv['Theme'];
    tmpJv.prix = rawJv['Prix'];
    tmpJv.description = rawJv['Description'];
    tmpJv.urlImage = rawJv['UrlImage'];
    tmpJv.stock = rawJv['Stock'];
    tmpJv.visible = rawJv['Visible'];
    return tmpJv;
  }

  public static fromJSONs(rawJvs:any[]): ReservationEnCours[]{
    return rawJvs.reduce((mags,currentElement)=>{
      mags.push(ReservationEnCours.fromJSON(currentElement));
      return mags;
    }, []);
  }

  public getCleanDataForSending(): any{
    return{
      "IdReservation": this.idReservation,
      "DateReservation":this.dateReservation,
      "DateLivraison":this.dateLivraison,
      "PrixAchat":this.prixAchat,
      "Etat":this.etat,
      "IdMembre":this.idMembre,
      "IdJeuxVideo":this.idJeuVideo,
      "Memb":this.membre,
      "Jv":this.jeuxvideo
    };
  }

}
