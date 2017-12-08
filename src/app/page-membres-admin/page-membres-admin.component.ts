import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Membre} from '../membre';
import {MembreManagerService} from '../membre-manager.service';

@Component({
  selector: 'app-page-membres-admin',
  templateUrl: './page-membres-admin.component.html',
  styleUrls: ['./page-membres-admin.component.css']
})
export class PageMembresAdminComponent implements OnInit {

  private mbrs: Membre[] = [];
  private newInnerWidth = window.innerWidth;

  @Output() private mbrsChange: EventEmitter<Membre[]> = new EventEmitter();

  constructor(public mService: MembreManagerService) { }

  ngOnInit() {
    this.mService.getAllM().subscribe(mbrs => this.mbrs = Membre.fromJSONs(mbrs));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;
  }

  public updateMembre(m: Membre) {
    this.mService.updateM(m).subscribe();
  }

  public deleteMembre(index: number){
    const DELETE_M = () => this.mbrs.splice(index, 1);
    const DISPLAY_ERROR = (error) => console.error(error);
    this.mService.deleteM(this.mbrs[index].id).subscribe(DELETE_M, DISPLAY_ERROR);
    this.mService.changeListeM(this.mbrs);
  }
}
