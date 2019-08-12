import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GameService } from '../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private game: Game;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.game = this.route.snapshot.data.game;

      if (!this.game) {
        this.router.navigate(['/404']);
      }
    });
  }

  getGame(): Game {
    return this.game;
  }
}
