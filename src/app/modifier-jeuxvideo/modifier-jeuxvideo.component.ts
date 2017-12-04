import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Jeuxvideo} from '../jeuxvideo';
import {JeuxvideoManagerService} from '../jeuxvideo-manager.service';

@Component({
  selector: 'app-modifier-jeuxvideo',
  templateUrl: './modifier-jeuxvideo.component.html',
  styleUrls: ['./modifier-jeuxvideo.component.css']
})
export class ModifierJeuxvideoComponent implements OnInit {

  private jvs: Jeuxvideo[] = [];
  private newInnerWidth = window.innerWidth;

  @Output() private jvsChange: EventEmitter<Jeuxvideo[]> = new EventEmitter();

  constructor(public jvService: JeuxvideoManagerService) { }

  ngOnInit() {
    this.jvService.currentList.subscribe(jvs => this.jvs = jvs);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;
  }


  public updateJeuxvideo(jv: Jeuxvideo) {
    this.jvService.updateJv(jv).subscribe();
  }

  public deleteJeuxvideo(index:number){
    const DELETE_JV = () =>this.jvs.splice(index,1);
    const DISPLAY_ERROR = (error) => console.error(error);
    //this.jvs.splice(index,1);
    this.jvService.deleteJv(this.jvs[index].id).subscribe(DELETE_JV,DISPLAY_ERROR);
    this.jvService.changeListeJv(this.jvs);
  }

}
