import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';
import {SentComponent} from './sent/sent.component';
const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path:'homepage/contact',redirectTo:'contact'},
  {path:'sent/homepage',redirectTo:'homepage'},
  {path:'contact',component:ContactComponent},
  {path:'sent',component:SentComponent},
  {path:'homepage/projects',redirectTo:'projects'},
  {path:'projects',component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
