import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  public users = [] as any;
  constructor(private _userlist: UserService) {
   }
   showLength = false;
   count=0;
  ngOnInit(): void {
    this.showLength = true;
    this._userlist.getUser()
    .subscribe(data=>{
      this.users = data; 
    })
    
  }

}
