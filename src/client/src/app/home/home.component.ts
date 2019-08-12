import { Component, OnInit } from '@angular/core';
import * as config from '../../assets/resources/config.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cdnUrl: string = config.cdnUrl;
  games: object[] = [
    {
      url: '/game/prime',
      image: 'prime.jpg'
    },
    {
      url: '/game/echoes',
      image: 'echoes.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
