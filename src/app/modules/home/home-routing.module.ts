import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { CreateUpdatePostComponent } from './components/create-update-post/create-update-post.component';
import { ACTION } from 'src/app/shared/enum/shared-enum';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'post/:id',
        component: PostComponent,
      },
      {
        path: 'create',
        component: CreateUpdatePostComponent,
        data: {
          action: ACTION.CREATE.valueOf(),
        },
      },
      {
        path: 'update/:id',
        component: CreateUpdatePostComponent,
        data: {
          action: ACTION.UPDATE.valueOf(),
        },
      },
      {
        path: 'trash',
        loadChildren: () =>
          import('../trash/trash.module').then((m) => m.TrashModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
