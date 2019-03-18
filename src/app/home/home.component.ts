import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
parentTitle = 'Parent Component(Home)';
//Property used in parent
	stdFullName = '';
	sum = '';
	msg = '';

//Property for child component one
	cityMsg = 'Indian City Names';
  cityArray = ['Bangalore','Varanasi', 'Delhi', 'Mumbai'];
  stdAddMsg = 'Add Student';

  //Property for child component two
	stdMsg = 'Student Leader Detail';
	stdLeaderObj = new Student('Na', 'Mo');

  constructor() { }
  ngOnInit() {}
  saveStudent(std) {
  	    this.stdFullName = std.fname + ' ' + std.lname ;
         console.log(this.stdFullName);
          }
  printMsg(msg){
 this.msg = msg ;
  }
  printSum(res) {
    this.sum = res;
      }
}
