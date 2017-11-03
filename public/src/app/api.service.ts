import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ApiService {

  data = {
    name:'',
    comment:''
  }

  constructor(private http:Http) { }

  send_comment(form)
  {
    this.data.name = form.value.name;
    this.data.comment = form.value.comment;
    console.log("SERVICE",this.data)
    return this.http.post('/send_comment',this.data).subscribe(
    (err)=>{
      console.log(err);
    })
  }
  

}
