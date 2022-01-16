import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorEditComponent } from './actor-edit.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { routingTable } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'actors', component: ActorListComponent },
      { path: 'actors/:id/edit', component: ActorEditComponent },
      { path: '', pathMatch: 'full', redirectTo: 'actors' },
      { path: '**', component: FourOhFourComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    ActorListComponent,
    ActorEditComponent,
    FourOhFourComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
