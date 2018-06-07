import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ScoreGraphicsComponent} from './score-graphics/score-graphics.component';
import {HoleInfoGraphicsComponent} from './hole-info-graphics/hole-info-graphics.component';
import {BugformComponent} from './bugform/bugform.component';

const routes: Routes = [

  { path: 'scoregraphics', component: ScoreGraphicsComponent },
  { path: 'holeinfographics', component: HoleInfoGraphicsComponent },
  { path: 'bugform', component: BugformComponent },
  { path: '**', redirectTo: '/scoregraphics', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
