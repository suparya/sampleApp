import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:User[];
  user: User = {
  id: null,
  name: null,
  password:null
}
   
  constructor() { }

  ngOnInit() {}
  onSubmit() {
  	console.log(this.user);
  	
  }
}
