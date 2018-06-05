import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ScoreGraphicsComponent} from './score-graphics/score-graphics.component';
import {HoleInfoGraphicsComponent} from './hole-info-graphics/hole-info-graphics.component';

const routes: Routes = [
  { path: '', redirectTo: '/scoregraphics', pathMatch: 'full' },
  { path: 'scoregraphics', component: ScoreGraphicsComponent },
  { path: 'holeinfographics', component: HoleInfoGraphicsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
