import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {SubmitService } from '../submit.service';


@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private _submit: SubmitService) { }
  
  u: User={
  firstName:'',
  lastName:'',
  email:''
};

count = 0;

  onSubmit(){
    this._submit.submit(this.u)
    .subscribe(
      data=> console.log("Sucess!", data),
      error=>console.log("Error!", error)
    )
  }
  ngOnInit(): void {
  }

}
