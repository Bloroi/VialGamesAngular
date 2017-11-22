import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {JeuxvideoManagerService} from '../jeuxvideo-manager.service';
import {Jeuxvideo} from '../jeuxvideo';

@Component({
  selector: 'app-jeuxvideo-list',
  templateUrl: './jeuxvideo-list.component.html',
  styleUrls: ['./jeuxvideo-list.component.css']
})
export class JeuxvideoListComponent implements OnInit {

  private jvs: Jeuxvideo[] = [];
  private typeFilterPrix:number = 0;


  @Output() private jvsChange: EventEmitter<Jeuxvideo[]> = new EventEmitter();

  constructor(public jvService: JeuxvideoManagerService) { }

  ngOnInit() {
    this.jvService
      .getAllJvs()
      .subscribe(jvs => {
        this.jvs = Jeuxvideo.fromJSONs(jvs);
        this.emitJeuxvideos();
      });
  }

  public emitJeuxvideos(){
    this.jvsChange.next(this.jvs);
  }


}
