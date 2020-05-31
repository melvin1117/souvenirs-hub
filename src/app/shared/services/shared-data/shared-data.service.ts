import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostRequest } from 'src/app/shared/interfaces/posts';
import { HttpService } from 'src/app/core/services/http/http.service';
import { API_END_POINTS } from 'src/app/configs/constants/api-end-points';
import { Utility } from '../../utils/utility';
import { Comment } from '../../interfaces/comments';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  isLoading = false;

  constructor(private http: HttpService) {}

  // Posts Service
  getPostsByDeleteCondition(isDeleted: boolean): Observable<Post[]> {
    return this.http.get(API_END_POINTS.POSTS, { isDeleted });
  }

  getPostByNotPostIdAndDeleteCondition(
    isDeleted: boolean,
    postIdToExclude: number
  ): Observable<Post[]> {
    const id = `[^${postIdToExclude}]`; // regex to exclude partId
    return this.http.get(API_END_POINTS.POSTS, { isDeleted, id }).pipe(
      map((posts) =>
        posts.sort(() => Math.random() - Math.random()).slice(0, 3)
      ) // select random 3 posts
    );
  }

  addPost(post: PostRequest) {
    return this.http.post(API_END_POINTS.POSTS, post);
  }

  deletePost(id: number) {
    return this.http.delete(
      Utility.createURL(API_END_POINTS.POST_BY_ID, new Map().set('id', id))
    );
  }

  updatePostById(id: number, post: Post | PostRequest) {
    return this.http.put(
      Utility.createURL(API_END_POINTS.POST_BY_ID, new Map().set('id', id)),
      post
    );
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get(
      Utility.createURL(API_END_POINTS.POST_BY_ID, new Map().set('id', id))
    );
  }

  // Comments Service
  getCommentsByDeleteCondition(isDeleted: boolean): Observable<Comment[]> {
    return this.http.get(API_END_POINTS.COMMENTS, { isDeleted });
  }

  getCommentsByPostIdAndDeleteCondition(
    isDeleted: boolean,
    postId: number
  ): Observable<Comment[]> {
    return this.http
      .get(API_END_POINTS.COMMENTS, { isDeleted, postId })
      .pipe(
        map((comments) =>
          comments.sort(
            (c1: Comment, c2: Comment) =>
              new Date(c2.createdTime).getTime() -
              new Date(c1.createdTime).getTime()
          )
        )
      );
  }

  deleteComment(id: number) {
    return this.http.delete(
      Utility.createURL(API_END_POINTS.COMMENT_BY_ID, new Map().set('id', id))
    );
  }

  updateCommentById(id: number, comment: Comment) {
    return this.http.put(
      Utility.createURL(API_END_POINTS.COMMENT_BY_ID, new Map().set('id', id)),
      comment
    );
  }

  addComment(comment: Comment) {
    return this.http.post(API_END_POINTS.COMMENTS, comment);
  }
}
