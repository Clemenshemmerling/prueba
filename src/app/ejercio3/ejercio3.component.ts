import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ejercio3',
  templateUrl: './ejercio3.component.html',
  styleUrls: ['./ejercio3.component.css']
})
export class Ejercio3Component implements OnInit {
  post: any = [];
  delPost: any = [];
  editPost: any = [];
  showEP = false;
  comments: any = [];
  delComments: any = [];
  index : number;
  textEdit: string;
  urlPost: string = 'https://jsonplaceholder.typicode.com/posts';
  urlComments: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private api: ApiService) { 
    this.api.get(this.urlPost).subscribe(res => {
      this.post = res;
    });

    this.api.get(this.urlComments).subscribe(res => {
      this.comments = res;
    });
  }

  edPost(p, i) {
    this.textEdit = '';
    this.showEP = true;
    this.index = i;
    this.textEdit = p.body;
  }

  saveP() {
    this.showEP = false;
    this.post[this.index].body = this.textEdit;
  }

  deletePost(p, i) {
    this.delPost.push(p);
    this.post.splice(i, 1);  
  }

  ngOnInit() {
  }

}
