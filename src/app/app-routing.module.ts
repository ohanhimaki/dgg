import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ScoreGraphicsComponent} from './score-graphics/score-graphics.component';

const routes: Routes = [
  { path: '', redirectTo: '/scoregraphics', pathMatch: 'full' },
  { path: 'scoregraphics', component: ScoreGraphicsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
