import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data = {
    name:'',
    comment:''
  }
  constructor(private service:ApiService) { }

  ngOnInit() {
  }

  send_comment(form)
  {
    console.log("TEST",form.value.name);
    this.service.send_comment(form);
  }

}
