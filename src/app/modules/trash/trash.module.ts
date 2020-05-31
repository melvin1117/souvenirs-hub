import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module imports
import { TrashRoutingModule } from './trash-routing.module';
import { TrashMaterialModule } from './modules/trash-material/trash-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components import
import { TrashComponent } from './trash.component';
import { PostTrashComponent } from './components/post-trash/post-trash.component';
import { CommentTrashComponent } from './components/comment-trash/comment-trash.component';

@NgModule({
  declarations: [TrashComponent, PostTrashComponent, CommentTrashComponent],
  imports: [
    CommonModule,
    TrashRoutingModule,
    TrashMaterialModule,
    SharedModule,
    FlexLayoutModule,
  ],
})
export class TrashModule {}
