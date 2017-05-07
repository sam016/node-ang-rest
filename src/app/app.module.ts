import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRouter } from './app.router';
import { AppComponent } from './app.component';
import { PageFoodComponent } from './components/page-food/page-food.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { FoodFilterPipe } from './pipes/food-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PageFoodComponent,
    WelcomeComponent,
    PageHeaderComponent,
    PageFooterComponent,
    FoodFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
