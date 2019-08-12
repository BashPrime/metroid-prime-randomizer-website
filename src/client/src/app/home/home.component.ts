import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as config from '../../assets/resources/config.json';
import { Game } from '../models/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cdnUrl: string = config.cdnUrl;
  games: Game[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.games = this.route.snapshot.data.games;
    });
  }

}
