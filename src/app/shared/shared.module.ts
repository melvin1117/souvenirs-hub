import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module imports
import { SharedMaterialModule } from './modules/shared-material/shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

// Component imports
import { CustomSnackbarComponent } from './components/custom-snackbar/custom-snackbar.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostCollectionComponent } from './components/post-collection/post-collection.component';
import { NameInitialComponent } from './components/name-initial/name-initial.component';
import { PostWrapperComponent } from './components/post-wrapper/post-wrapper.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { MenuOptionsComponent } from './components/menu-options/menu-options.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { CommentActionsComponent } from './components/comment-actions/comment-actions.component';
import { CharacterCountPipe } from './pipes/character-count/character-count.pipe';

@NgModule({
  declarations: [
    CustomSnackbarComponent,
    PostCardComponent,
    PostCollectionComponent,
    NameInitialComponent,
    PostWrapperComponent,
    PostInfoComponent,
    MenuOptionsComponent,
    CommentCardComponent,
    CommentActionsComponent,
    CharacterCountPipe,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [
    CustomSnackbarComponent,
    PostCardComponent,
    PostCollectionComponent,
    PostWrapperComponent,
    MenuOptionsComponent,
    CommentCardComponent,
    CommentActionsComponent,
    ReactiveFormsModule,
  ],
  entryComponents: [CustomSnackbarComponent],
})
export class SharedModule {}
