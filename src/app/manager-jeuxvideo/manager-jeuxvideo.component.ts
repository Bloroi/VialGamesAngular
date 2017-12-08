import { Component, OnInit } from '@angular/core';
import {MembreConnecteService} from '../membre-connecte.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manager-jeuxvideo',
  templateUrl: './manager-jeuxvideo.component.html',
  styleUrls: ['./manager-jeuxvideo.component.css']
})
export class ManagerJeuxvideoComponent implements OnInit {


  constructor(public mcService: MembreConnecteService, public router: Router) { }

  ngOnInit() {


    if (this.mcService.getType() == '2') {
    }else {
      this.router.navigate(['/']);
    }


  }

}
