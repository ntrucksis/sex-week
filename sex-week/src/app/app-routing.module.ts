import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { StreamsComponent } from './streams/streams.component';


const routes: Routes = [
{path: '', component: HomeComponent },
{path: 'about', component: HomeComponent},
{path: 'events', component: EventsComponent},
{path: 'streams', component: StreamsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
