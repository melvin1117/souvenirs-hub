import { Component, OnInit, OnDestroy } from '@angular/core';
import { ACTION } from 'src/app/shared/enum/shared-enum';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Post, PostRequest } from 'src/app/shared/interfaces/posts';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedDataService } from 'src/app/shared/services/shared-data/shared-data.service';
import { EventListenerService } from 'src/app/shared/services/event-listener/event-listener.service';
import { CustomSnackbarComponent } from 'src/app/shared/components/custom-snackbar/custom-snackbar.component';
import { SnackbarConfig } from 'src/app/configs/snackbar-config';
import { CONSTANTS } from 'src/app/shared/constants/constant';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { RichTextEditorConfig } from 'src/app/configs/rich-text-editor-config';

@Component({
  selector: 'sh-create-update-post',
  templateUrl: './create-update-post.component.html',
  styleUrls: ['./create-update-post.component.scss'],
})
export class CreateUpdatePostComponent implements OnInit, OnDestroy {
  action: ACTION;
  submitted = false;
  subscriptions: Subscription[] = [];
  post: PostRequest | Post;
  config: AngularEditorConfig = RichTextEditorConfig.editor;
  pId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sharedDataService: SharedDataService,
    private snackBar: MatSnackBar,
    private eventListenerService: EventListenerService
  ) {
    this.action = this.activatedRoute.snapshot.data.action;
  }

  ngOnInit(): void {
    if (this.action === ACTION.CREATE) {
      this.initializePostObj();
    } else {
      this.pId = +this.activatedRoute.snapshot.paramMap.get('id');
      this.getPostById();
    }
  }

  getPostById() {
    this.subscriptions.push(
      this.sharedDataService.getPostById(this.pId).subscribe((response) => {
        this.post = response;
        this.eventListenerService.updateLoadingStatus(false);
      })
    );
  }

  initializePostObj() {
    this.post = {
      createdTime: new Date(),
      isDeleted: false,
    };
  }

  saveImageToBase64(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.post.image = reader.result.toString();
      };
    }
  }

  onSubmit(formDirective: NgForm) {
    if (this.isValid()) {
      this.eventListenerService.updateLoadingStatus(true);
      if (this.action === ACTION.CREATE) {
        this.createPost(formDirective);
      } else {
        this.updatePost(formDirective);
      }
    } else {
      this.showErrorSnackbar(CONSTANTS.ERROR_CREATING_POST);
    }
  }

  updatePost(formDirective: NgForm) {
    this.post.updatedTime = new Date();
    this.subscriptions.push(
      this.sharedDataService
        .updatePostById(this.pId, this.post)
        .subscribe((response) => {
          this.eventListenerService.updateLoadingStatus(false);
          this.showSuccessSnackbar(CONSTANTS.POST_UPDATED_SUCCESSFULLY);
        })
    );
  }
  createPost(formDirective: NgForm) {
    this.subscriptions.push(
      this.sharedDataService.addPost(this.post).subscribe((response) => {
        this.eventListenerService.updateLoadingStatus(false);
        this.showSuccessSnackbar(CONSTANTS.POST_CREATED_SUCCESSFULLY);
        this.initializePostObj();
        formDirective.resetForm();
      })
    );
  }

  showSuccessSnackbar(message: any) {
    this.snackBar.openFromComponent(
      CustomSnackbarComponent,
      SnackbarConfig.getSuccessSnackbarConfig(message)
    );
  }

  showErrorSnackbar(message: any) {
    this.snackBar.openFromComponent(
      CustomSnackbarComponent,
      SnackbarConfig.getErrorSnackbarConfig(message)
    );
  }

  isValid() {
    return this.post.image;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
