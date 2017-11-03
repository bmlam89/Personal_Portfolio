import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';
const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path:'homepage/contact',redirectTo:'contact'},
  {path:'contact',component:ContactComponent},
  {path:'homepage/projects',redirectTo:'projects'},
  {path:'projects',component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
