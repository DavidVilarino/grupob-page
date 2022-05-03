import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { FormComponent } from './pages/form/form.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "gallery", component : GalleryComponent},
  {path: "form", component : FormComponent},
  {path: "gallery/:idcar", component : DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
