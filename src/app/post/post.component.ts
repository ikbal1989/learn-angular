import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = [];

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getAll()
                .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let newPost: any = {title: input.value};

    input.value = '';

    this.service.create(newPost)
                .subscribe(post => {
                  this.posts.splice(0, 0, newPost);
                  newPost.id = post.id;
                },
                (error: AppError) => {
                  if (error instanceof BadInput) {
                    // this.form.setErrors(error.originalError);
                  } else {
                    throw error;
                  }
                });
  }

  updatePost(post) {
    this.service.update(post)
                .subscribe(response => {
                  console.log(response);
                });
  }

  removePost(post) {
    this.service.delete(post.id)
                .subscribe(
                  () => {
                    let index = this.posts.indexOf(post);
                    this.posts.splice(index, 1);
                  },
                  (error: AppError) => {
                    if (error instanceof NotFoundError) {
                      alert('This post is already been deleted');
                    } else {
                      throw error;
                    }
                  });
  }



}
