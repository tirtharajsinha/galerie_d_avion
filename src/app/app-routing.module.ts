import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './myComponents/home/home.component';
import { GallaryComponent } from './myComponents/gallary/gallary.component';
import { ViewComponent } from './myComponents/view/view.component';
import { PageNotFoundComponent } from './myComponents/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: "home",
    title: "Home | galerie_d_avion",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "gallary",
    title: "Gallary | galerie_d_avion",
    component: GallaryComponent
  },
  {
    path: "view/:id",
    title: "View | galerie_d_avion",
    component: ViewComponent
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
