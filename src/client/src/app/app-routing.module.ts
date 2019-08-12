import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Services
import { GameResolve } from './services/game.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'game/:game',
    component: GameComponent,
    resolve: {
      game: GameResolve
    },
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
