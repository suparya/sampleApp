import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
@Input()
ctMsg : string;

@Input('ctArray')
myCityNames : Array<string>

@Input('studentAddMsg')
studentAddMsg:string

student = new Student();
message = 'Send Message'
msg=''

@Output('addStudent')
addStudentEvent= new EventEmitter<Student>()

@Output('sendMsg')
sendMsgEvent= new EventEmitter<string>()

addStud(){
  this.addStudentEvent.emit(this.student)
}
sendMsg(){
  this.sendMsgEvent.emit(this.msg)
}
  constructor() { }

  ngOnInit() {
  }


}
