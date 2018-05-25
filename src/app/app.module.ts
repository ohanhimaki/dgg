import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { ScoreGraphicsComponent } from './score-graphics/score-graphics.component';
import { CanvasComponent } from './canvas/canvas.component';
import { BackgroundEditingComponent } from './background-editing/background-editing.component';
import { ScoreEditingComponent } from './score-editing/score-editing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ScoreGraphicsComponent,
    CanvasComponent,
    BackgroundEditingComponent,
    ScoreEditingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
