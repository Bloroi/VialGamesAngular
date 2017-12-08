import { Component, OnInit } from '@angular/core';
import {MembreConnecteService} from '../membre-connecte.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manager-membre',
  templateUrl: './manager-membre.component.html',
  styleUrls: ['./manager-membre.component.css']
})
export class ManagerMembreComponent implements OnInit {


  constructor(
    public mcService: MembreConnecteService, public router: Router) { }

  ngOnInit() {

    if (this.mcService.getType() == '2') {
    }else {
      this.router.navigate(['/']);
    }

  }

}
