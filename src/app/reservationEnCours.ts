export class ReservationEnCours {
  private _idReservation: string;
  private _dateReservation: string;
  private _dateLivraison: string;
  private _prixAchat: number;
  private _etat: boolean;
  private _idMembre: number;
  private _idJeuVideo: number;

  constructor(dateReservation: string = "unknown", dateLivraison: string = "unknown", prixAchat: number = 0.00, etat: boolean = true, idMembre: number = 0, idJeuVideo: number = 0) {
    this._dateReservation = dateReservation;
    this._dateLivraison = dateLivraison;
    this._prixAchat = prixAchat;
    this._etat = etat;
    this._idMembre = idMembre;
    this._idJeuVideo = idJeuVideo;
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

  get etat(): boolean {
    return this._etat;
  }

  set etat(value: boolean) {
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
    tmpRF.idJeuVideo = rawJv["IdJeuVideo"];
    return tmpRF;
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
      "IdJeuVideo":this.idJeuVideo,
    };
  }

}
