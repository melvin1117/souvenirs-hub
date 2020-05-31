import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrashComponent } from './trash.component';
import { PostTrashComponent } from './components/post-trash/post-trash.component';
import { CommentTrashComponent } from './components/comment-trash/comment-trash.component';

const routes: Routes = [
  {
    path: '',
    component: TrashComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'post',
      },
      {
        path: 'post',
        component: PostTrashComponent,
      },
      {
        path: 'comment',
        component: CommentTrashComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrashRoutingModule {}
