import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './user';
import {SubmitService } from '../submit.service';
import { UserlistComponent } from '../userlist/userlist.component';

import { UserService } from '../user.service';


@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public users = [] as any;

  constructor(private _submit: SubmitService, private _userlist: UserService) { }

  h = false;

  fun(){
    this.h=true;
  }
  
  u: User={
  firstName:'',
  lastName:'',
  email:''
};

count = 0;
showLength = true

  onSubmit(){
    this._submit.submit(this.u)
    .subscribe(
      data=> console.log("Sucess!", data),
      error=>console.log("Error!", error)
    )
    this.users.length +=1;
  }
  ngOnInit(): void {
    this.showLength = true;
    this._userlist.getUser()
    .subscribe(data=>{
      this.users = data; 
    })
  }

}
