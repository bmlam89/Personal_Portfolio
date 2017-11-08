import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data = {
    name:'',
    comment:'',
    email:''
  }
  constructor(private service:ApiService, private router:Router) { }

  ngOnInit() {
  }

  send_comment(form)
  {
    this.service.send_comment(form);
    this.router.navigate(['sent']);
  }

}
