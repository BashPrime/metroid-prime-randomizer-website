import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Services
import { AllRandomizersResolve, SingleRandomizerResolve } from './services/randomizer.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      randomizers: AllRandomizersResolve
    }
  },
  {
    path: 'randomizer/:randomizer',
    component: RandomizerComponent,
    resolve: {
      randomizer: SingleRandomizerResolve
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
