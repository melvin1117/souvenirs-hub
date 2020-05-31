import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  SecurityContext,
} from '@angular/core';
import { Post, PostRequest } from '../../interfaces/posts';
import { MODULE } from '../../enum/shared-enum';

@Component({
  selector: 'sh-post-wrapper',
  templateUrl: './post-wrapper.component.html',
  styleUrls: ['./post-wrapper.component.scss'],
})
export class PostWrapperComponent implements OnInit {
  @Input() post: Post | PostRequest;
  module = MODULE.MAIN_POST;
  constructor() {}

  ngOnInit(): void {}
}
