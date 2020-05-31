import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../interfaces/posts';
import { MENU_OPTION } from '../../enum/shared-enum';

@Component({
  selector: 'sh-post-collection',
  templateUrl: './post-collection.component.html',
  styleUrls: ['./post-collection.component.scss'],
})
export class PostCollectionComponent implements OnInit {
  @Input() mode: string;
  @Input() posts: Post[];
  @Output() menuClicked = new EventEmitter<MENU_OPTION>();

  constructor() {}

  ngOnInit(): void {}

  onMenuClick(event: MENU_OPTION) {
    this.menuClicked.emit(event);
  }
}
