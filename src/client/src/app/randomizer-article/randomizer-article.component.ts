import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-randomizer-article',
  templateUrl: './randomizer-article.component.html',
  styleUrls: ['./randomizer-article.component.scss']
})
export class RandomizerArticleComponent implements OnInit {
  private article: RandomizerArticle;
  private readonly types = {
    markdown: SectionType.MARKDOWN,
    youtube: SectionType.YOUTUBE
  };

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getArticle() {
    return this.article;
  }

  getTypes() {
    return this.types;
  }

  getTrustedYouTubeUrl(id: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
  }
}

class RandomizerArticle {
  id: number;
  name: string;
  title: string;
  description: string;
  content: GameArticleSection[];
  // game: Game;
  category: GameArticleCategory;
  // last_updated_user: User;
  last_updated_date: Date;
}

class GameArticleSection {
  type: SectionType;
  markdown: string;
  youtubeId: string;
}

class GameArticleCategory {
  id: number;
  name: string;
  abbreviation: string;
}

enum SectionType {
  MARKDOWN = 'markdown',
  YOUTUBE = 'youtube'
}
