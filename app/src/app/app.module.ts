import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; /* for API calls */
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { NgModule } from '@angular/core';

/* Pulll in our components and interfaces */
import { AppComponent } from './app.component';
import { DecadeToggleComponent } from './decade-toggle/decade-toggle.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieSearchResponse } from './movie-search-response';

// ng generate automatically imports new components to app and declares them
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    DecadeToggleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
