import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  teams: Team[] = [];
  constructor() {
      this.teams.push(new Team(1," River Plate"));
      this.teams.push(new Team(2," juventud"));
      this.teams.push(new Team(3," Bauti Clem"));
  }

  ngOnInit(): void {
  }

}
