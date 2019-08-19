import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import * as config from '../../assets/resources/config.json';
import { Randomizer } from '../../../../common/models/randomizer.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cdnUrl: string = config.cdnUrl;
  randomizers: Randomizer[];
  faDiscord = faDiscord;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.randomizers = this.route.snapshot.data.randomizers;
    });
  }

}
