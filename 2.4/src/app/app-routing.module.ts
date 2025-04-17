import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { PostResolver } from './post.resolver';


const routes: Routes = [
  {
    path: 'detail',
    component: DetailComponent,
    resolve: { post: PostResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
