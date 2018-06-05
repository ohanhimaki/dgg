import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { ScoreGraphicsComponent } from './score-graphics/score-graphics.component';
import { CanvasComponent } from './canvas/canvas.component';
import { BackgroundEditingComponent } from './background-editing/background-editing.component';
import { ScoreEditingComponent } from './score-editing/score-editing.component';
import { HoleInfoGraphicsComponent } from './hole-info-graphics/hole-info-graphics.component';
import { HoleInfoEditingComponent } from './hole-info-editing/hole-info-editing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ScoreGraphicsComponent,
    CanvasComponent,
    BackgroundEditingComponent,
    ScoreEditingComponent,
    HoleInfoGraphicsComponent,
    HoleInfoEditingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
