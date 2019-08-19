import { Component, OnInit } from '@angular/core';
import * as config from '../../assets/resources/config.json';
import { Randomizer } from '../../../../common/models/randomizer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.scss']
})
export class RandomizerComponent implements OnInit {
  private randomizer: Randomizer;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.randomizer = this.route.snapshot.data.randomizer;

      if (!this.randomizer) {
        this.router.navigate(['/404']);
      }
    });
  }

  getRandomizer(): Randomizer {
    return this.randomizer;
  }

  get cdnUrl(): string {
    return config.cdnUrl;
  }

  get heroStyle() {
    return {
      'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + this.cdnUrl + 'games/banners/' + this.randomizer.game.banner + ')'
    }
  }
}
