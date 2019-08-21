import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RandomizerArticle } from '../../../../common/models/randomizerArticle';

@Component({
  selector: 'app-randomizer-all-articles',
  templateUrl: './randomizer-all-articles.component.html',
  styleUrls: ['./randomizer-all-articles.component.scss']
})
export class RandomizerAllArticlesComponent implements OnInit {
  private articles: RandomizerArticle[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.articles = this.route.snapshot.data.articles;
    });
  }

  getArticles() {
    return this.articles;
  }
}
