import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Jeuxvideo} from '../jeuxvideo';
import {JeuxvideoManagerService} from '../jeuxvideo-manager.service';
import {DataJvServiceService} from '../data-jv-service.service';

@Component({
  selector: 'app-modifier-jeuxvideo',
  templateUrl: './modifier-jeuxvideo.component.html',
  styleUrls: ['./modifier-jeuxvideo.component.css']
})
export class ModifierJeuxvideoComponent implements OnInit {

  private jvs: Jeuxvideo[] = [];

  @Output() private jvsChange: EventEmitter<Jeuxvideo[]> = new EventEmitter();

  constructor(public jvService: JeuxvideoManagerService, private data: DataJvServiceService) { }

  ngOnInit() {
    this.data.currentList.subscribe(jvs => this.jvs = jvs);
    //this.refreshList();
  }


  public updateJeuxvideo(jv: Jeuxvideo) {
    this.jvService.updateJv(jv).subscribe();
  }

  public deleteJeuxvideo(index:number){
    const DELETE_JV = () =>this.jvs.splice(index,1);
    const DISPLAY_ERROR = (error) => console.error(error);
    //this.jvs.splice(index,1);
    this.jvService.deleteJv(this.jvs[index].id).subscribe(DELETE_JV,DISPLAY_ERROR);
    this.data.changeListeJv(this.jvs);
  }

}
