import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces/posts';
import { MODULE } from '../../enum/shared-enum';

@Component({
  selector: 'sh-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.scss'],
})
export class PostInfoComponent implements OnInit {
  @Input() post: Post;
  @Input() module: MODULE;

  moduleEnum = MODULE;
  constructor() {}

  ngOnInit(): void {}
}
