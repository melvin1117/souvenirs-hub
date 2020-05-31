import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../interfaces/posts';
import { MODE, MODULE } from '../../enum/shared-enum';
import { Router } from '@angular/router';
import { EmittedMenuSelection } from '../../interfaces/shared';

@Component({
  selector: 'sh-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() mode: MODE;
  @Input() post: Post;
  @Output() menuClicked = new EventEmitter<EmittedMenuSelection>();
  module = MODULE.POST;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openPost() {
    if (this.mode !== MODE.TRASH) {
      this.router.navigateByUrl(`/post/${this.post.id}`);
    }
  }

  onMenuClick(event: EmittedMenuSelection) {
    this.menuClicked.emit(event);
  }

  isTrash() {
    return MODE.TRASH === this.mode;
  }
}
